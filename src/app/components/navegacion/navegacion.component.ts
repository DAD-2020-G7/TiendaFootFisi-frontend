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
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this._userService.cargarStorage()
    console.log(this._userService.usuario)
    this.router.navigateByUrl('login')
  }

}
