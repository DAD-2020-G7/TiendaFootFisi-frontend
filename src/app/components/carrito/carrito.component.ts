import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: any;

  constructor(
    public _carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.productos = this._carritoService.getItems()
    console.log(this.productos)
  }

  eliminarItem(item, value) {
    this._carritoService.eliminarItem(value);
    this.productos = this._carritoService.getItems()
    Swal.fire(
      '¡Eliminado!',
      'El producto ha sido removido satisfactoriamente',
      'success'
    )
  }

}
