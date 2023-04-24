import { createAction, props } from '@ngrx/store';
import { Character } from '../app.state';

export const fetchCharacters = createAction('[Character] Fetch characters');

export const fetchCharactersSuccess = createAction(
  '[Character] Fetch characters success',
  props<{ characters: Character[] }>()
);
