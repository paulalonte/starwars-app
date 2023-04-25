import { HomeworldDetail } from './../../store/app.state';
import { fetchHomeworld } from './../../store/character/character.actions';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import {
  selectHomeworldDetail,
  selectIsFetching,
} from 'src/app/store/character/character.selector';
import { Location } from '@angular/common';

@Component({
  selector: 'app-homeworld',
  templateUrl: './homeworld.component.html',
  styleUrls: ['./homeworld.component.scss'],
})
export class HomeworldComponent {
  id!: string;
  routeSubscription!: Subscription;
  isFetching$!: Observable<boolean>;
  homeworldDetail$!: Observable<HomeworldDetail>;
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

    this.homeworldDetail$ = this.store.select((state) =>
      selectHomeworldDetail(state, this.id)
    );

    this.hasError$ = this.store.select(
      (state) => state.characterState.hasError
    );
  }

  ngOnInit(): void {
    this.store.dispatch(fetchHomeworld({ id: this.id }));

    this.hasError$.subscribe((data) => {
      if (data) {
        this.router.navigate(['not-found']);
      }
    });
  }

  onBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
