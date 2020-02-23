import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { tableau } from 'tableau-api';

/**
 * Service
 */
import { ProductoService } from './services/producto.service';
import { TallaService } from './services/talla.service';
import { CategoriaService } from './services/categoria.service';
import { TipoDocumentoService } from './services/tipo-documento.service';
import { ClienteService } from './services/cliente.service';

/**
 * Component
 */
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ProductoFormComponent } from './components/form/producto-form/producto-form.component';
import { ProductoListComponent } from './components/list/producto-list/producto-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ClienteFormComponent } from './components/form/cliente-form/cliente-form.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { CarritoComponent } from './components/carrito/carrito.component';

/**
 * Modulos 
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/assets/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ProductoFormComponent,
    ProductoListComponent,
    FilterComponent,
    CatalogoComponent,
    ClienteFormComponent,
    LoginFormComponent,
    CarritoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    ProductoService,
    TallaService,
    CategoriaService,
    TipoDocumentoService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
