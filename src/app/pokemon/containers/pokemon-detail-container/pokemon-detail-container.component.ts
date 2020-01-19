import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../../pokemon.service';
import { AppRoutes } from 'src/app/global';

@Component({
  selector: 'app-pokemon-detail-container',
  templateUrl: './pokemon-detail-container.component.html',
  styleUrls: ['./pokemon-detail-container.component.scss']
})
export class PokemonDetailContainerComponent implements OnInit {

  pokemon: Observable<Pokemon>;

  constructor(private route: ActivatedRoute, private service: PokemonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Subscribe to router parameters to fetch pokemon name
      const name = params.get(AppRoutes.POKE_NAME_PARAM);
      // Initalise our Pokemon property with the result from our service
      this.pokemon = this.service.fetchPokemonDetails(name);
    });
  }

}
