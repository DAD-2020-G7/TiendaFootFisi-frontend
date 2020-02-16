import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClienteUsuario } from '../models/ClienteUsuario';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/cliente";
  //API_URI = "http://localhost:8083/api/cliente";

  constructor(private http: HttpClient) { }

  guardarCliente(cliente: ClienteUsuario){
    return this.http.post(`${this.API_URI}/registrar`, cliente);
  }

}
