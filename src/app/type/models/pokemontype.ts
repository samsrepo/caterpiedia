import { PokemonListItem } from 'src/app/pokemon/models/pokemonlistitem';

export interface PokemonType {
  name: string;
  double_damage_from: string[];
  double_damage_to: string[];
  half_damage_from: string[];
  half_damage_to: string[];
  no_damage_from: string[];
  no_damage_to: string[];
  move_damage_class: string;
  moves: string[];
  pokemon: PokemonListItem[];
}
