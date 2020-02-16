import { Component, OnInit } from '@angular/core';

import { TipoDocumentoService } from '../../../services/tipo-documento.service';

import { ClienteUsuario } from '../../../models/ClienteUsuario';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  tipoDocumentos: any = [];

  cliente: ClienteUsuario = {
    sIdTipoDocumento:'',
    sNumeroDocumento:'',
    sApellidoPaterno:'',
    sAapellidoMaterno:'',
    sNombres:'',
    sDireccion:'',
    sCelular:'',
    sCorreoElectronico:'',

    sIdUsuario:'',
    sContrasenia:'',
  };

  constructor(private tipoDocumentoService: TipoDocumentoService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.tipoDocumentoService.getTipoDocumentos().subscribe(
      res => {
        this.tipoDocumentos = res;
      },
      err => console.log(err)
    );
  }

  registrarCliente(){
    this.clienteService.guardarCliente(this.cliente).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
