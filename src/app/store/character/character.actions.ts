import { createAction, props } from '@ngrx/store';
import { Character, CharacterDetail, HomeworldDetail } from '../app.state';

export const fetchCharacters = createAction(
  '[Character] Fetch characters',
  props<{ page: number }>()
);

export const fetchCharactersSuccess = createAction(
  '[Character] Fetch characters success',
  props<{ characters: Character[]; totalRecords: number }>()
);

export const fetchCharacter = createAction(
  '[Character] Fetch character',
  props<{ id: string }>()
);

export const fetchCharacterSuccess = createAction(
  '[Character] Fetch character success',
  props<{ detail: CharacterDetail; id: string }>()
);

export const fetchHomeworld = createAction(
  '[Character] Fetch homeworld',
  props<{ id: string }>()
);

export const fetchHomeworldSuccess = createAction(
  '[Character] Fetch homeworld success',
  props<{ homeworld: HomeworldDetail; id: string }>()
);

export const setCurrentPage = createAction(
  '[Character] Set current page',
  props<{ page: number }>()
);

export const resetLoading = createAction('[Character] reset loading');

export const setError = createAction(
  '[Character] Set error page',
  props<{ hasError: boolean }>()
);
