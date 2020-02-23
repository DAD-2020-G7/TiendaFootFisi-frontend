import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoListComponent } from './components/list/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/form/producto-form/producto-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { ClienteFormComponent } from './components/form/cliente-form/cliente-form.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: FilterComponent
  },
  {
    path: 'productos',
    component: ProductoListComponent
  },
  {
    path: 'productos/agregar',
    component: ProductoFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'registrar',
    component: ClienteFormComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
