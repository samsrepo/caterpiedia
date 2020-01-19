import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeRoutingModule } from './type-routing.module';
import { TypeContainerComponent } from './containers/type-container/type-container.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { TypeDetailContainerComponent } from './containers/type-detail-container/type-detail-container.component';
import { TypeDetailComponent } from './components/type-detail/type-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TypeContainerComponent, TypeListComponent, TypeDetailContainerComponent, TypeDetailComponent],
  imports: [
    CommonModule,
    TypeRoutingModule,
    SharedModule
  ]
})
export class TypeModule { }
