import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  
  constructor(
    public _carritoService: CarritoService,
    public _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this._userService.cargarStorage();
    if(localStorage.getItem('usuario')){
      if(this._userService.usuario.hasOwnProperty('sTipoTrabajador')){
        if(this._userService.usuario.sTipoTrabajador == 'Gerente'){
          this._userService.loginTipo = 1;
        }
        if(this._userService.usuario.sTipoTrabajador == 'Recursos humanos'){
          this._userService.loginTipo = 2;    
        }
        if(this._userService.usuario.sTipoTrabajador == 'Encargado de almacen'){
          this._userService.loginTipo = 3;
        }
      }
    }
    else{
      this._userService.loginTipo = 0;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this._userService.cargarStorage()
    console.log(this._userService.usuario)
    this.router.navigateByUrl('login')
  }

}
