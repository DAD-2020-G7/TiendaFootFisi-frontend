import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoListComponent } from './components/list/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/form/producto-form/producto-form.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component : CatalogoComponent
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
