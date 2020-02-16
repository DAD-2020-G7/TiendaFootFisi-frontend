import { Component, OnInit, ViewChild } from '@angular/core';

import { CatalogoComponent } from '../../components/catalogo/catalogo.component';

import { TallaService } from '../../services/talla.service';
import { CategoriaService } from '../../services/categoria.service';

import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @ViewChild(CatalogoComponent, {static: false}) catalogoComponent: CatalogoComponent;
  
  filter: Filter ={
    idCategoria: 0,
    sMarca: '',
    sGenero: '',
    sTipo: '',

    idTalla: 0,
    sTalla: '',
  };

  tallas: any = [];

  marcas: any = [];
  generos: any = [];
  tipos: any = [];

  constructor(private tallaService: TallaService, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.tallaService.getTalla().subscribe(
      res => {
        this.tallas = res;
      },
      err => console.log(err)
    );
    this.categoriaService.getMarcas().subscribe(
      res => {
        this.marcas = res;
      },
      err => console.log(err)
    );
  }

  comboMarca() {
    this.categoriaService.getGeneros(this.filter.sMarca).subscribe(
      res => {
        this.generos = res;
      },
      err => console.log(err)
    );
  }

  comboGenero() {
    this.categoriaService.getTipos(this.filter.sMarca, this.filter.sGenero).subscribe(
      res => {
        this.tipos = res;
      },
      err => console.log(err)
    );
  }

  filtrar(){
    console.log(this.filter);
    this.catalogoComponent.catalogoFiltrado(this.filter);
  }

}
