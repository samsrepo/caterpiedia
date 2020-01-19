import { environment } from 'src/environments/environment';

export const AppRoutes = {
  POKEMON: 'pokemon',
  POKE_DETAILS: 'pokedetail',
  POKE_NAME_PARAM: 'name',
  TYPES: 'types',
  TYPE_DETAILS: 'typedetail',
  TYPE_NAME_PARAM: 'name'
};

export const APIActions = {
  GET_ALL_POKEMON: environment.API_URL + 'pokemon',
  GET_POKEMON_DETAILS: environment.API_URL + 'pokemon/:name',
  GET_ALL_TYPES: environment.API_URL + 'type',
  GET_TYPE_DETAILS: environment.API_URL + 'type/:name'
};
