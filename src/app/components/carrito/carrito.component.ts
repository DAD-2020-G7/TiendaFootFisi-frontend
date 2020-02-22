import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

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

}
