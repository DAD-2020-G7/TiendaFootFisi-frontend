import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/producto";

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/listar`);
  }

  getProducto(idProducto: string){
    return this.http.get(`${this.API_URI}/g/${idProducto}`);
  }

  saveProducto(producto: Producto){
    return this.http.post(`${this.API_URI}/producto`, producto);
  }

  updateProducto(){

  }
  
}
