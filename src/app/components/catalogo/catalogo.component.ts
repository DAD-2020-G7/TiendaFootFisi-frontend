import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Filter } from '../../models/Filter';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: any = [];

  constructor(
    public productoService: ProductoService,
    public _carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
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
    item['cantidad'] = 1
    item['tallaSeleccionada'] = item.lTallas[0]
    this._carritoService.addToCart(item)
    Swal.fire(
      '¡Correcto!',
      'El producto se ha añadido correctamente al carrito',
      'success'
    )
  }

}
