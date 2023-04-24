import { CharacterState, AppState } from './../app.state';
import { createSelector } from '@ngrx/store';

export const selectCharactersReducer = (state: AppState) => state.characters;

export const selectIsFetching = (state: AppState) =>
  state.characters.isFetching;

export const selectCharacters = createSelector(
  selectCharactersReducer,
  (state: CharacterState) => state.characters
);

export const selectCharacterDetail = createSelector(
  selectCharactersReducer,
  (state: CharacterState) => state.characterDetail
);
