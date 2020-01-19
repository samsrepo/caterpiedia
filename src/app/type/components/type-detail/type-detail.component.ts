import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PokemonType } from '../../models/pokemontype';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss']
})
export class TypeDetailComponent implements OnInit {

  @Input() type: PokemonType;
  @Output() pokemonSelected = new EventEmitter();
  @Output() typeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
