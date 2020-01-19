import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { APIActions } from '../global';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpService } from '../shared/http.service';
import { PokemonListItem } from './models/pokemonlistitem';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpService: HttpService) { }

  fetchAllPokemon(): Observable<PokemonListItem[]> {
    // Perform our get request using our endpoint constant
    return this.httpService.performGet(APIActions.GET_ALL_POKEMON)
      .pipe(
        map((response: Response) => {
          // Map the response into our PokemonListItem[] object type
          return this.mapPokemonList(response);
        })
      );
  }

  fetchPokemonDetails(name: string): Observable<Pokemon> {
    // Perform our get request using our endpoint constant
    const API = APIActions.GET_POKEMON_DETAILS.replace(':name', name);
    return this.httpService.performGet(API)
      .pipe(
        map((response: Response) => {
          // Map the response into our Pokemon object type
          return this.mapPokemon(response);
        })
      );
  }

  mapPokemon(details): Pokemon {
    const types: string[] = [];
    // Iterate through each type and extract the type name
    for (const i in details.types) {
      if (details.types[i].type) {
        types.push(details.types[i].type.name);
      }
    }
    // Iterate through each move and extract the move name
    const moves: string[] = [];
    for (const j in details.moves) {
      if (details.moves[j].move) {
        moves.push(details.moves[j].move.name);
      }
    }

    // Construct our pokemon object
    const pokemon: Pokemon = {
      name: details.name,
      id: details.id,
      weight: details.weight,
      height: details.height,
      image: details.sprites.front_default,
      types: types,
      moves: moves
    };
    return pokemon;
  }

  mapPokemonList(list: any): PokemonListItem[] {
    // Initialise our array of PokemonListItem objects
    const pokeItems: PokemonListItem[] = [];
    // Iterate through the raw list of results from the API
    for (const i in list.results) {
      if (list.results[i]) {
        // Add a new PokemonListItem to our array
        pokeItems.push({name: list.results[i].name});
      }
    }
    return pokeItems;
  }
}
