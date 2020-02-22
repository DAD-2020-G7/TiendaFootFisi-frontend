import { Component, OnInit, HostBinding } from '@angular/core';

import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/Producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';
  
  productos: any = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      res => {
        console.log(res)
        this.productos = res;
      },
      err => console.log(err)
    );
  }

}
