import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/trabajador";
  //API_URI = "http://localhost:8083/api/trabajador";

  constructor(private http: HttpClient) { }

  getTrabajadores(){
    return this.http.get(`${this.API_URI}/listar`);
  }

  guardarTrabajador(trabajador: any){
    return this.http.post(`${this.API_URI}/registrar`, trabajador);
  }

}
