import { createAction, props } from '@ngrx/store';
import { Character, CharacterDetail } from '../app.state';

export const fetchCharacters = createAction(
  '[Character] Fetch characters',
  props<{ pageSize: number; limit: number }>()
);

export const fetchCharactersSuccess = createAction(
  '[Character] Fetch characters success',
  props<{ characters: Character[] }>()
);

export const fetchCharacter = createAction(
  '[Character] Fetch character',
  props<{ id: string }>()
);

export const fetchCharacterSuccess = createAction(
  '[Character] Fetch character success',
  props<{ detail: CharacterDetail }>()
);
