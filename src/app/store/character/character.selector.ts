import { CharacterState, AppState } from './../app.state';
import { createSelector } from '@ngrx/store';

export const selectCharactersReducer = (state: AppState) =>
  state.characterState;

export const selectIsFetching = (state: AppState) =>
  state.characterState.isFetching;

export const selectCharacters = (state: AppState, page: number) =>
  state.characterState.characters[page];

export const selectCurrentPage = (state: AppState) =>
  state.characterState.currPage;

export const selectCharacterDetail = (state: AppState, id: string) =>
  state.characterState.characterDetail[id];

export const selectHomeworldDetail = (state: AppState, id: string) =>
  state.characterState.homeworldDetail[id];
