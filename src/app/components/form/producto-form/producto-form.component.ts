import { Component, OnInit, HostBinding } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { ProductoService } from '../../../services/producto.service';
import { TallaService } from '../../../services/talla.service';
import { CategoriaService } from '../../../services/categoria.service';

import { Producto } from '../../../models/Producto';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {


  producto: Producto = {
    idProducto: 0,

    idCategoria: 0,
    sMarca: '',
    sGenero: '',
    sTipo: '',

    lTallas:[],

    sNombre: '',
    sDescripcion: '',
    nPrecioUnitario: 0,
    nCantidad: 0,
    sFoto: ''
  };

  tallas: any = [];

  marcas: any = [];
  generos: any = [];
  tipos: any = [];

  dropdownSettings:IDropdownSettings = {};

  constructor(private tallaService: TallaService, private productoService: ProductoService, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.tallaService.getTalla().subscribe(
      res => {
        this.tallas = res;
        this.producto.lTallas = [];
        this.dropdownSettings = {
          singleSelection: false,
          idField: 'nIdTalla',
          textField: 'sDescripcion',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
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

  guardarProducto() {
    this.producto.idCategoria = this.tipos.find(x => (x.sMarca == this.producto.sMarca && x.sGenero == this.producto.sGenero && x.sTipo == this.producto.sTipo)).nIdCategoria;
    this.productoService.saveProducto(this.producto).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    console.log(this.producto);
  }

  comboMarca() {
    this.categoriaService.getGeneros(this.producto.sMarca).subscribe(
      res => {
        this.generos = res;
      },
      err => console.log(err)
    );
  }

  comboGenero() {
    this.categoriaService.getTipos(this.producto.sMarca, this.producto.sGenero).subscribe(
      res => {
        this.tipos = res;
      },
      err => console.log(err)
    );
  }

  onItemSelect(item: any) {
    
  }
  onSelectAll(items: any) {
    //this.producto.tallas = items;
  }
 
}
