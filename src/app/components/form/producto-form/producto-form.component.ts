import { Component, OnInit, HostBinding } from '@angular/core';

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

  @HostBinding('class') classes = 'row';

  producto: Producto = {
    idProducto: 0,

    idCategoria: 0,
    sMarca: '',
    sGenero: '',
    sTipo: '',

    idTalla: 0,
    sTalla: '',

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

  constructor(private tallaService: TallaService, private productoService: ProductoService, private categoriaService: CategoriaService) { }

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

  guardarProducto() {
    this.producto.idTalla = this.tallas.find(x => x.sDescripcion == this.producto.sTalla).nIdTalla;
    this.producto.idCategoria = this.tipos.find(x => (x.sMarca == this.producto.sMarca && x.sGenero == this.producto.sGenero && x.sTipo == this.producto.sTipo)).nIdCategoria;
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

}
