import { CharacterDetail } from './../app.state';
import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../app.state';
import * as CharacterActions from './character.actions';

export const initialState: CharacterState = {
  characters: [],
  isFetching: false,
  characterDetail: {},
  currPage: 1,
};

export const characterReducer = createReducer(
  initialState,
  on(CharacterActions.fetchCharacters, (state) => ({
    ...state,
    isFetching: true,
  })),
  on(CharacterActions.fetchCharactersSuccess, (state, { characters }) => ({
    ...state,
    isFetching: false,
    characters,
  })),
  on(CharacterActions.fetchCharacter, (state) => ({
    ...state,
    isFetching: true,
  })),
  on(CharacterActions.fetchCharacterSuccess, (state, { detail, id }) => {
    return {
      ...state,
      isFetching: false,
      characterDetail: { ...state.characterDetail, [id]: detail },
    };
  }),
  on(CharacterActions.setCurrentPage, (state, { page }) => {
    return {
      ...state,
      currPage: page,
    };
  })
);
