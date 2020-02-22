import { Component, OnInit, HostBinding } from '@angular/core';

import { ProductoService } from '../../services/producto.service';

import { Filter } from '../../models/Filter';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: any = [];

  constructor(
    private productoService: ProductoService,
    private _carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
        console.log(this.productos)
      },
      err => console.log(err)
    );
  }

  catalogoFiltrado(filter: Filter) {
    this.productoService.getProductoFiltro(filter).subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    );
  }

  addItem(item) {
    this._carritoService.addToCart(item)
  }

}
