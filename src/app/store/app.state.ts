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
}

export interface Character {
  uid: string;
  name: string;
  url: string;
}

export interface CharacterState {
  characters: Character[];
  isFetching: boolean;
  characterDetail: Record<string, Partial<CharacterDetail>>;
  currPage: number;
}

export interface AppState {
  characterState: CharacterState;
}

export const appReducer = {
  characterState: characterReducer,
};
