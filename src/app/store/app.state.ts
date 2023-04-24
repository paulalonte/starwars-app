import { characterReducer } from './character/character.reducer';

export interface Character {
  uid: string;
  name: string;
  url: string;
}

export interface CharacterState {
  characters: Character[];
  isFetching: boolean;
}

export interface AppState {
  characters: CharacterState;
}

export const appReducer = {
  characterReducer: characterReducer,
};
