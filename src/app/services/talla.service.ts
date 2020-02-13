import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallaService {

  API_URI = "http://localhost:8083/api/talla";

  constructor(private http: HttpClient) { }

  getTalla(){
    return this.http.get(`${this.API_URI}/listar`);
  }

}
