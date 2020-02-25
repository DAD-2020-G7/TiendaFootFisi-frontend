import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../../../services/tipo-documento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  tipoDocumentos: any = [];

  datosPersonales = this.fb.group({
    sIdTipoDocumento: ['', [Validators.required]],
    sNumeroDocumento: ['', [Validators.required]],
    sApellidoPaterno: ['', [Validators.required]],
    sApellidoMaterno: ['', [Validators.required]],
    sNombres: ['', [Validators.required]],
    sDireccion: ['', [Validators.required]],
    sCelular: ['', [Validators.required]]
  })

  datosAcceso = this.fb.group({
    sCorreoElectronico: ['', [Validators.required]],
    sIdUsuario: ['', [Validators.required]],
    sContrasenia: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private tipoDocumentoService: TipoDocumentoService,
    private clienteService: ClienteService
  ) { }


  ngOnInit() {
    this.tipoDocumentoService.getTipoDocumentos().subscribe(
      res => {
        this.tipoDocumentos = res;
      },
      err => console.log(err)
    );
  }

  jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }

  registrarCliente() {
    let cliente = this.jsonConcat(this.datosAcceso.value, this.datosPersonales.value)
    console.log(cliente)
    this.clienteService.guardarCliente(cliente).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire(
          '¡Listo!',
          `Usted ha sido registrado correctamente!`,
          'success'
        )
      },
      err => console.log(err)
    );
  }

}
