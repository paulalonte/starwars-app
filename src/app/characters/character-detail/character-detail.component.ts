import { CharacterDetail } from './../../store/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchCharacter } from './../../store/character/character.actions';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Subscription, Observable } from 'rxjs';
import { Location } from '@angular/common';
import {
  selectCharacterDetail,
  selectIsFetching,
} from 'src/app/store/character/character.selector';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  id!: string;
  characterDetail$: Observable<Partial<CharacterDetail>>;
  routeSubscription!: Subscription;
  isFetching$!: Observable<boolean>;
  hasError$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private activatRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.isFetching$ = this.store.select(selectIsFetching);
    this.routeSubscription = this.activatRoute.params.subscribe(
      (params) => (this.id = params['id'])
    );

    this.characterDetail$ = this.store.select((state) =>
      selectCharacterDetail(state, this.id)
    );

    this.hasError$ = this.store.select(
      (state) => state.characterState.hasError
    );
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCharacter({ id: this.id }));

    this.hasError$.subscribe((data) => {
      if (data) {
        this.router.navigate(['not-found']);
      }
    });
  }

  onHomeworldClick() {
    this.characterDetail$.subscribe((data) => {
      const planetId = data.homeworld?.split('/').pop();

      this.router.navigate([`planet/${planetId}`], {
        relativeTo: this.activatRoute,
      });
    });
  }

  onBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
