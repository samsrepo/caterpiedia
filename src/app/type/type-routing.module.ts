import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeContainerComponent } from './containers/type-container/type-container.component';
import { AppRoutes } from '../global';
import { TypeDetailContainerComponent } from './containers/type-detail-container/type-detail-container.component';

const routes: Routes = [
  { path: '', component: TypeContainerComponent },
  { path: AppRoutes.TYPE_DETAILS + '/:' + AppRoutes.TYPE_NAME_PARAM, component: TypeDetailContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRoutingModule { }
