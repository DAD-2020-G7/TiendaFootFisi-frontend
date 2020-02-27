import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: any;
  usuario: any;
  montoTotal: number = 0;
  constructor(
    public _carritoService: CarritoService,
    public _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productos = this._carritoService.getItems()
    this.calcularMontoTotal();
    console.log(this.productos)
  }

  eliminarItem(item, value) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se eliminará el producto de la lista",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelr'
    }).then((result) => {
      if (result.value) {
        this._carritoService.eliminarItem(value);
        this.productos = this._carritoService.getItems()
        this.calcularMontoTotal()
        Swal.fire(
          '¡Eliminado!',
          'El producto ha sido removido satisfactoriamente',
          'success'
        )
      }
    })

  }

  calcularMontoTotal() {
    this.montoTotal = 0;
    this.productos.map(
      producto => {
        this.montoTotal += producto.nPrecioUnitario * producto.cantidad
      }
    )
  }

  reducir(i) {
    this.productos[i].cantidad > 1 ?
      this.productos[i].cantidad-- : null
    this.calcularMontoTotal()
  }

  aumentar(i) {
    this.productos[i].cantidad < 10 ?
      this.productos[i].cantidad++ : null
    this.calcularMontoTotal()
  }

  pagar() {
    let date = new Date();

    let tramaEnvio = {
      tipoComp: 1,
      codEstablecimiento: "967",
      numeroSerie: "00000001",
      tipoDoc: "06",
      numeroDoc: "10770349767",
      nombrePer: "TORRES MORI CARLOS ALBERTO",
      direccionPer: "ASOC. SAN JUAN BAUTISTA",
      igv: true,
      total: this.montoTotal,
      estado: 1,
      fechaRegistro: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      items: []
    }

    this.productos.map(
      (producto: any) => {
        tramaEnvio.items.push({
          codItem: producto.idProducto,
          descripcionItem: producto.sDescripcion,
          tallaItem: producto.tallaSeleccionada.nIdTalla,
          cantidadItem: producto.cantidad,
          precioItem: producto.nPrecioUnitario
        })
      }
    )

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se procederá con la compra de los productos seleccionados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelr'
    }).then((result) => {
      if (result.value) {
        if (localStorage.getItem('usuario')) {
          this._userService.cargarStorage();
          this.usuario = this._userService.usuario;

          tramaEnvio.tipoDoc = this.usuario.sIdTipoDocumento;
          tramaEnvio.numeroDoc = this.usuario.sNumeroDocumento;
          this._carritoService.pagarOrden(tramaEnvio).subscribe(
            (res: any) => {
              if (res.sTipo == 1)
                Swal.fire(
                  '¡Listo!',
                  'El pedido ha sido confirmado',
                  'success'
                ).then(result => {
                  this._carritoService.clearCart();
                  this._carritoService.getItems();
                  this.router.navigateByUrl("catalogo")
                })
            },
            error => {
              console.log(error)
              Swal.fire(
                '¡Ups!',
                'Algo salió mal',
                'error'
              )
            }
          )
        } else {
          localStorage.setItem('carrito', 'true')
          Swal.fire(
            '¡Iniciar sesión!',
            'Debe acceder para continuar con la compra',
            'warning'
          ).then(result => {
            this.router.navigateByUrl('login')
          })
        }
      }
    })


  }

}
