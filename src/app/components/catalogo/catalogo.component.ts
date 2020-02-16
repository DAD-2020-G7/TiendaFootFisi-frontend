import { Component, OnInit, HostBinding } from '@angular/core';

import { ProductoService } from '../../services/producto.service';

import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
    
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

  catalogoFiltrado(filter: Filter){
    this.productoService.getProductoFiltro(filter).subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    );
  }

}
