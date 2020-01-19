import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { PokemonListItem } from '../../models/pokemonlistitem';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/global';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss']
})
export class PokemonContainerComponent implements OnInit {

  pokemonList: Observable<PokemonListItem[]>;

  constructor(private service: PokemonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Initialise our pokemon list property using the observable from our service
    this.pokemonList = this.service.fetchAllPokemon();
  }

  loadDetail(name) {
    this.router.navigate([AppRoutes.POKE_DETAILS, name], { relativeTo: this.route });
  }

}
