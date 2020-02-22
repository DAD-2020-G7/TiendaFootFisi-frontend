import { Component, OnInit, ViewChild } from '@angular/core';

import { CatalogoComponent } from '../../components/catalogo/catalogo.component';

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
    sNombre: '',

    idCategoria: 0,
    sMarca: '',
    sGenero: '',
    sTipo: ''
  };

  tallas: any = [];

  marcas: any = [];
  generos: any = [];
  tipos: any = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
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
