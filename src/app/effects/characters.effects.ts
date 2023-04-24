import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';

import * as CharacterActions from '../store/character/character.actions';
import { throwError } from 'rxjs';
import { CharacterService } from '../characters/service/character.service';
import { Character, CharacterDetail } from '../store/app.state';

@Injectable()
export class CharactersEffects {
  fetchCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.fetchCharacters),
      exhaustMap((action) =>
        this.characterService
          .fetchCharacters(action.pageSize, action.limit)
          .pipe(
            map((data: any) => {
              const list: Character[] = data.results;
              return CharacterActions.fetchCharactersSuccess({
                characters: list,
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
            const detail: CharacterDetail = data.result.properties;
            return CharacterActions.fetchCharacterSuccess({
              detail: detail,
            });
          }),
          catchError((err) => throwError(() => err))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
