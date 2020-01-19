import { Component, OnInit } from '@angular/core';
import { PokemonType } from '../../models/pokemontype';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../../type.service';
import { AppRoutes } from 'src/app/global';

@Component({
  selector: 'app-type-detail-container',
  templateUrl: './type-detail-container.component.html',
  styleUrls: ['./type-detail-container.component.scss']
})
export class TypeDetailContainerComponent implements OnInit {

  type: Observable<PokemonType>;

  constructor(private route: ActivatedRoute, private service: TypeService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Subscribe to router parameters to fetch type name
      const name = params.get(AppRoutes.TYPE_NAME_PARAM);
      // Initalise our Pokemon property with the result from our service
      this.type = this.service.fetchTypeDetails(name);
    });
  }

  loadPokemon(name) {
    this.router.navigate([AppRoutes.POKEMON + '/' + AppRoutes.POKE_DETAILS, name]);
  }

  loadType(name) {
    this.router.navigate([AppRoutes.TYPES + '/' + AppRoutes.TYPE_DETAILS, name]);
  }

}
