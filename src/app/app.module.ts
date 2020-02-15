import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ProductoFormComponent } from './components/form/producto-form/producto-form.component';
import { ProductoListComponent } from './components/list/producto-list/producto-list.component';

import { ProductoService } from './services/producto.service';
import { TallaService } from './services/talla.service';
import { CategoriaService } from './services/categoria.service';
import { FilterComponent } from './components/filter/filter.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ProductoFormComponent,
    ProductoListComponent,
    FilterComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService,
    TallaService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
