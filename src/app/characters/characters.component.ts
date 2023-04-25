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
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap, Subscription } from 'rxjs';
import { AppState, Character } from '../store/app.state';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters$!: Observable<Character[]>;
  isFetching$!: Observable<boolean>;
  selectedPage = 1;
  pageLimit = 10;

  totalRecords!: number;
  rowsPerPage = 10;
  totalPagination!: number;

  totalPages: number[] = [];

  storeSubscription!: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isFetching$ = this.store.select(selectIsFetching);
    this.characters$ = this.store.select(selectCharacters);
    this.storeSubscription = this.store
      .select(selectCharactersReducer)
      .subscribe((data) => {
        this.selectedPage = data.currPage;
        this.totalRecords = data.totalRecords;
        this.totalPagination = Math.ceil(this.totalRecords / this.rowsPerPage);
        this.createPagination();
      });
  }

  createPagination() {
    this.totalPages = [];
    for (let i = 0; i < this.totalPagination; i++) {
      this.totalPages.push(i + 1);
    }
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

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
