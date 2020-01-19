import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { APIActions } from '../global';
import { TypeListItem } from './models/typelistitem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonType } from './models/pokemontype';
import { PokemonListItem } from '../pokemon/models/pokemonlistitem';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private httpService: HttpService) { }

  fetchAllTypes(): Observable<TypeListItem[]> {
    // Perform our get request using our endpoint constant
    return this.httpService.performGet(APIActions.GET_ALL_TYPES)
      .pipe(
        map((response: Response) => {
          // Map the response into our TypeListItem[] object type
          return this.mapTypeList(response);
        })
      );
  }

  fetchTypeDetails(name: string): Observable<PokemonType> {
    // Perform our get request using our endpoint constant
    const API = APIActions.GET_TYPE_DETAILS.replace(':name', name);
    return this.httpService.performGet(API)
      .pipe(
        map((response: Response) => {
          // Map the response into our PokemonType object type
          return this.mapType(response);
        })
      );
  }

  mapType(details): PokemonType {

    // Initialise our array of PokemonListItem objects
    const pokeItems: PokemonListItem[] = [];
    // Iterate through the raw list of results from the API
    for (const i in details.pokemon) {
      if (details.pokemon[i]) {
        // Add a new PokemonListItem to our array
        pokeItems.push({name: details.pokemon[i].pokemon.name});
      }
    }
    // Construct our pokemon object
    const type: PokemonType = {
      name: details.name,
      move_damage_class: details.move_damage_class ? details.move_damage_class.name : '',
      double_damage_from: this.extractNames(details.damage_relations.double_damage_from),
      double_damage_to: this.extractNames(details.damage_relations.double_damage_to),
      half_damage_from: this.extractNames(details.damage_relations.half_damage_from),
      half_damage_to: this.extractNames(details.damage_relations.half_damage_to),
      no_damage_from: this.extractNames(details.damage_relations.no_damage_from),
      no_damage_to: this.extractNames(details.damage_relations.no_damage_to),
      pokemon: pokeItems,
      moves: this.extractNames(details.moves)
    };
    return type;
  }

  // Small helper function to save us from repeating ourselves...
  extractNames(responseArray: any[]): string[] {
    const stringArray = [];
    for (const i in responseArray) {
      if (responseArray[i].name) {
        stringArray.push(responseArray[i].name);
      }
    }
    return stringArray;
  }

  mapTypeList(list: any): TypeListItem[] {
    // Initialise our array of TypeListItem objects
    const typeItems: TypeListItem[] = [];
    // Iterate through the raw list of results from the API
    for (const i in list.results) {
      if (list.results[i]) {
        // Add a new TypeListItem to our array
        typeItems.push({name: list.results[i].name});
      }
    }
    return typeItems;
  }
}
