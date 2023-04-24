import {
  selectCharacters,
  selectCharactersReducer,
  selectCurrentPage,
  selectIsFetching,
} from './../store/character/character.selector';
import {
  fetchCharacters,
  setCurrentPage,
} from './../store/character/character.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppState, Character } from '../store/app.state';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$!: Observable<Character[]>;
  isFetching$!: Observable<boolean>;
  selectedPage = 1;
  pageLimit = 10;

  totalPages = [1, 2, 3, 4, 5];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isFetching$ = this.store.select(selectIsFetching);
    this.characters$ = this.store.select(selectCharacters);
    this.store
      .select(selectCharactersReducer)
      .subscribe((data) => (this.selectedPage = data.currPage));
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCharacters());
  }

  onCharacterClick(character: Character) {
    this.router.navigate([character.uid], { relativeTo: this.route });
  }

  onPaginationClick(page: number) {
    this.store.dispatch(setCurrentPage({ page }));
  }
}
