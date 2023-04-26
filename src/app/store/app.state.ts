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

export interface HomeworldDetail {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
}

export interface Character {
  uid: string;
  name: string;
  url: string;
}

export interface CharacterState {
  characters: Record<string, Character[]>;
  isFetching: boolean;
  characterDetail: Record<string, Partial<CharacterDetail>>;
  currPage: number;
  totalRecords: number;
  fetchedPages: number[];
  homeworldDetail: Record<string, HomeworldDetail>;
  hasError: boolean; // this error should be an object and needs to be in the global app state. This is just for showing error page when api fails.
}

export interface AppState {
  characterState: CharacterState;
}

export const appReducer = {
  characterState: characterReducer,
};
