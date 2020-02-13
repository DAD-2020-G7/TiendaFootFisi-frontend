import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductoListComponent} from './components/list/producto-list/producto-list.component';
import {ProductoFormComponent} from './components/form/producto-form/producto-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component : ProductoListComponent
  },
  {
    path: 'productos/agregar',
    component : ProductoFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
