import {
  selectCharacters,
  selectIsFetching,
} from './../store/character/character.selector';
import { fetchCharacters } from './../store/character/character.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  }

  ngOnInit(): void {
    this.store.dispatch(
      fetchCharacters({ pageSize: 1, limit: this.pageLimit })
    );
  }

  onCharacterClick(character: Character) {
    this.router.navigate([character.uid], { relativeTo: this.route });
  }

  onPaginationClick(page: number) {
    this.selectedPage = page;
    this.store.dispatch(
      fetchCharacters({ pageSize: page, limit: this.pageLimit })
    );
  }
}
