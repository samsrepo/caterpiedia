import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './global';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: AppRoutes.POKEMON, loadChildren: './pokemon/pokemon.module#PokemonModule'},
  { path: AppRoutes.TYPES, loadChildren: './type/type.module#TypeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
