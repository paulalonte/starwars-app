import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiURL: string = 'https://www.swapi.tech/api/people';

  constructor(private http: HttpClient) {}

  fetchCharacters(page: number = 0, limit: number = 5) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('limit', limit);

    return this.http.get(this.apiURL, { params: queryParams });
  }

  fetchCharacter(id: string) {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
