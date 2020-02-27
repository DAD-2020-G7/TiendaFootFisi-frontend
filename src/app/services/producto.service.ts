import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/Producto';
import { Filter } from '../models/Filter';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/producto";
  //API_URI = "http://localhost:8083/api/producto";

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/listar`);
  }

  getProductoFiltro(filter: Filter){
    return this.http.post(`${this.API_URI}/listar/filtro`, filter);
  }

  getProducto(idProducto: string){
    return this.http.get(`${this.API_URI}/g/${idProducto}`);
  }

  saveProducto(producto: Producto){
    return this.http.post(`${this.API_URI}/registrar`, producto);
  }

  updateProducto(){

  }
  
}
