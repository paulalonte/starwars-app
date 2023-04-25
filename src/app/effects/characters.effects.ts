import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  map,
  catchError,
  exhaustMap,
  switchMap,
  withLatestFrom,
  filter,
} from 'rxjs/operators';

import * as CharacterActions from '../store/character/character.actions';
import { throwError } from 'rxjs';
import { CharacterService } from '../characters/service/character.service';
import { AppState, Character, CharacterDetail } from '../store/app.state';
import { pick } from 'lodash';
import { Store } from '@ngrx/store';

@Injectable()
export class CharactersEffects {
  fetchCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.fetchCharacters),
      exhaustMap((action) =>
        this.characterService.fetchCharacters().pipe(
          map((data: any) => {
            const list: Character[] = data.results;
            const totalRecords = data.total_records;
            return CharacterActions.fetchCharactersSuccess({
              characters: list,
              totalRecords,
            });
          }),
          catchError((err) => throwError(() => err))
        )
      )
    )
  );

  fetchCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.fetchCharacter),
      exhaustMap((action) =>
        this.characterService.fetchCharacter(action.id).pipe(
          map((data: any) => {
            const id = data.result.uid;
            const attributesToPick = [
              'height',
              'mass',
              'hair_color',
              'skin_color',
              'eye_color',
              'birth_year',
              'gender',
              'name',
              'homeworld',
            ];
            const detail: any = pick(data.result.properties, attributesToPick);

            return CharacterActions.fetchCharacterSuccess({
              detail,
              id,
            });
          }),
          catchError((err) => throwError(() => err))
        )
      )
    )
  );

  setCurrentPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.setCurrentPage),
      map(() => CharacterActions.fetchCharacters())
    )
  );

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
