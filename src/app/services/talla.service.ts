import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallaService {

  //API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/talla";
  API_URI = "http://localhost:8083/api/talla";

  constructor(private http: HttpClient) { }

  getTalla(){
    return this.http.get(`${this.API_URI}/listar`);
  }

}
