import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/tipodocumento";
  //API_URI = "http://localhost:8083/api/tipodocumento";

  constructor(private http: HttpClient) { }

  getTipoDocumentos(){
    return this.http.get(`${this.API_URI}/listar`);
  }

}
