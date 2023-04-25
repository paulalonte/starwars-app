import { createAction, props } from '@ngrx/store';
import { Character, CharacterDetail } from '../app.state';

export const fetchCharacters = createAction('[Character] Fetch characters');

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

export const setCurrentPage = createAction(
  '[Character] Set current page',
  props<{ page: number }>()
);
