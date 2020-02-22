import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: any;
  montoTotal: number = 0;
  constructor(
    public _carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.productos = this._carritoService.getItems()
    this.calcularMontoTotal();
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
          cantidadItem: producto.cantidad,
          precioItem: producto.nPrecioUnitario
        })
      }
    )

    console.log(tramaEnvio);
    this._carritoService.pagarOrden(tramaEnvio).subscribe(
      res => { console.log(res) },
      error => { console.log(error) }
    )

  }

}
