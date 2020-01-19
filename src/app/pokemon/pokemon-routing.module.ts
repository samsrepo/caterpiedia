import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonContainerComponent } from './containers/pokemon-container/pokemon-container.component';
import { PokemonDetailContainerComponent } from './containers/pokemon-detail-container/pokemon-detail-container.component';
import { AppRoutes } from '../global';

const routes: Routes = [
  { path: '', component: PokemonContainerComponent  },
  { path: AppRoutes.POKE_DETAILS + '/:' + AppRoutes.POKE_NAME_PARAM, component: PokemonDetailContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
