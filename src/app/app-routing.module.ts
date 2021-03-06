import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoListComponent } from './components/list/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/form/producto-form/producto-form.component';
import { TrabajadorListComponent } from './components/list/trabajador-list/trabajador-list.component';
import { TrabajadorFormComponent } from './components/form/trabajador-form/trabajador-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { ClienteFormComponent } from './components/form/cliente-form/cliente-form.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/catalogo',
    pathMatch: 'full',
  },
  {
    path: 'catalogo',
    component: FilterComponent,
  },
  {
    path: 'productos',
    component: ProductoListComponent,
  },
  {
    path: 'productos/agregar',
    component: ProductoFormComponent
  },
  {
    path: 'trabajadores',
    component: TrabajadorListComponent
  },
  {
    path: 'trabajador/agregar',
    component: TrabajadorFormComponent
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
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
