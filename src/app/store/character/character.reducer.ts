import { CharacterDetail } from './../app.state';
import { createReducer, on } from '@ngrx/store';
import { CharacterState } from '../app.state';
import * as CharacterActions from './character.actions';

export const initialState: CharacterState = {
  characters: [],
  isFetching: false,
  characterDetail: {},
  currPage: 1,
  totalRecords: 0,
  fetchedPages: [1],
  homeworldDetail: {},
};

export const characterReducer = createReducer(
  initialState,
  on(CharacterActions.fetchCharacters, (state) => ({
    ...state,
    isFetching: true,
  })),
  on(
    CharacterActions.fetchCharactersSuccess,
    (state, { characters, totalRecords }) => ({
      ...state,
      isFetching: false,
      characters,
      totalRecords,
    })
  ),
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
  on(CharacterActions.fetchHomeworld, (state) => ({
    ...state,
    isFetching: true,
  })),
  on(CharacterActions.fetchHomeworldSuccess, (state, { homeworld, id }) => {
    return {
      ...state,
      isFetching: false,
      homeworldDetail: { ...state.homeworldDetail, [id]: homeworld },
    };
  }),
  on(CharacterActions.setCurrentPage, (state, { page }) => {
    return {
      ...state,
      currPage: page,
      fetchedPages: [...state.fetchedPages, page],
    };
  })
);
