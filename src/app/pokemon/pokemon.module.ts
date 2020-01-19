import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonContainerComponent } from './containers/pokemon-container/pokemon-container.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonDetailContainerComponent } from './containers/pokemon-detail-container/pokemon-detail-container.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonContainerComponent, PokemonDetailContainerComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule
  ]
})
export class PokemonModule { }
