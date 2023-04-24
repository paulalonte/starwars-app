import { characterReducer } from './character/character.reducer';

export interface CharacterDetail {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  name: string;
  homeworld: string;
  url: string;
}

export interface Character {
  uid: string;
  name: string;
  url: string;
}

export interface CharacterState {
  characters: Character[];
  isFetching: boolean;
  characterDetail: Partial<CharacterDetail>;
}

export interface AppState {
  characters: CharacterState;
}

export const appReducer = {
  characters: characterReducer,
};
