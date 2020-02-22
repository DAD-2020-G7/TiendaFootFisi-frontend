import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(
    public _carritoService: CarritoService
  ) { }

  ngOnInit() {
  }

}
