import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../app.state';
import * as CharacterActions from './character.actions';

export const initialState: CharacterState = {
  characters: [],
  isFetching: false,
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
  }))
);
