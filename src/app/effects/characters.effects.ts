import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  map,
  catchError,
  exhaustMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

import * as CharacterActions from '../store/character/character.actions';
import { of, throwError } from 'rxjs';
import { CharacterService } from '../characters/service/character.service';
import { AppState, Character, CharacterDetail } from '../store/app.state';
import { pick } from 'lodash';
import { Store } from '@ngrx/store';
import { setError } from '../store/character/character.actions';

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
      withLatestFrom(
        this.store.select((state) => state.characterState.characterDetail) // get latest character detail
      ),
      switchMap(([action, characterDetailState]) => {
        // check if character detail is not present
        // if not call api to get data
        // else just get the data from te store. And call reset loading action to avoid showing loading status
        if (characterDetailState[action.id] === undefined) {
          return this.characterService.fetchCharacter(action.id).pipe(
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
              const detail = pick(
                data.result.properties,
                attributesToPick
              ) as CharacterDetail;

              return CharacterActions.fetchCharacterSuccess({
                detail,
                id,
              });
            }),
            catchError((err) =>
              throwError(() => {
                if (err.status === 404) {
                  return this.store.dispatch(setError({ hasError: true }));
                }
                return err;
              })
            )
          );
        } else {
          return of(CharacterActions.resetLoading());
        }
      })
    )
  );

  fetchHomeworld$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.fetchHomeworld),
      withLatestFrom(
        this.store.select((state) => state.characterState.homeworldDetail) // get latest homeworld detail
      ),
      switchMap(([action, homeworldState]) => {
        // check if homeworld detail is not present
        // if not call api to get data
        // else just get the data from te store. And call reset loading action to avoid showing loading status
        if (homeworldState[action.id] === undefined) {
          return this.characterService.fetchHomeworld(action.id).pipe(
            map((data: any) => {
              const id = data.result.uid;
              const homeworld: any = data.result.properties;

              return CharacterActions.fetchHomeworldSuccess({
                homeworld,
                id,
              });
            }),
            catchError((err) =>
              throwError(() => {
                if (err.status === 404) {
                  return this.store.dispatch(setError({ hasError: true }));
                }
                return err;
              })
            )
          );
        } else {
          return of(CharacterActions.resetLoading());
        }
      })
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
