import { Component, OnInit, HostBinding } from '@angular/core';

import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  productos: any = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    );
  }
  
}
