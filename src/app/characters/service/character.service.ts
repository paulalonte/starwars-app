import { Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectCharactersReducer } from 'src/app/store/character/character.selector';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiURL: string = 'https://www.swapi.tech/api/people';
  planetUrl: string = 'https://www.swapi.tech/api/planets';

  selectedPage!: number;
  storeSubscription!: Subscription;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store
      .select(selectCharactersReducer)
      .subscribe((data) => (this.selectedPage = data.currPage));
  }

  fetchCharacters() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', this.selectedPage);
    queryParams = queryParams.append('limit', 10); // we can make dynamic in case needed

    return this.http.get(this.apiURL, { params: queryParams });
  }

  fetchCharacter(id: string) {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  fetchPlanet(id: string) {
    return this.http.get(`${this.planetUrl}/${id}`);
  }
}
