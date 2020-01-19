import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonListItem } from 'src/app/pokemon/models/pokemonlistitem';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonList: PokemonListItem[];
  @Output() pokemonSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

}
