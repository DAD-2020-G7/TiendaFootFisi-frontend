import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public usuario: any;
  //API_URI = "https://tienda-foot-fisi-backend.herokuapp.com/api/login";
  API_URI = "http://localhost:8083/api/login";

  constructor(private http: HttpClient) { }

  login(user, pass) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.API_URI}/usuario/${user}/${pass}`, { headers }).pipe(
      map((resp: any) => {
        console.log(resp)
        if (resp.sTipo != "4" && resp.sTipo != "5") {
          this.guardarStorage(resp);
        }
        return resp;
      })
    );
  }

  guardarStorage(usuario: any) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  cargarStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    } else {
      this.usuario = null;
    }
  }


}
