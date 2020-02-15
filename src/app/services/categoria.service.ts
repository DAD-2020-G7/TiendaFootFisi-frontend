import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/categoria/listar";

  constructor(private http: HttpClient) { }

  getMarcas(){
    return this.http.get(`${this.API_URI}/marca`);
  }

  getGeneros(idMarca: string) {
    return this.http.get(`${this.API_URI}/genero/${idMarca}`);
  }

  getTipos(idMarca: string, idGenero: string) {
    return this.http.get(`${this.API_URI}/tipo/${idMarca}/${idGenero}`);
  }

}
