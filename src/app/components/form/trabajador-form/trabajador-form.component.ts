import { Component, OnInit } from '@angular/core';
import { TipoDocumentoService } from '../../../services/tipo-documento.service';
import { TrabajadorService } from '../../../services/trabajador.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabajador-form',
  templateUrl: './trabajador-form.component.html',
  styleUrls: ['./trabajador-form.component.css']
})
export class TrabajadorFormComponent implements OnInit {
  
  tipoDocumentos: any = [];
  loading: boolean = false;

  datosPersonales = this.fb.group({
    sIdTipoDocumento: ['', [Validators.required]],
    sNumeroDocumento: ['', [Validators.required]],
    sApellidoPaterno: ['', [Validators.required]],
    sApellidoMaterno: ['', [Validators.required]],
    sNombres: ['', [Validators.required]],
    sTipoTrabajador: ['', [Validators.required]]
  })

  datosAcceso = this.fb.group({
    sIdUsuario: ['', [Validators.required]],
    sContrasenia: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private tipoDocumentoService: TipoDocumentoService,
    private trabajadorService: TrabajadorService
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

  registrarTrabajador() {
    this.loading = true;
    let trabajador = this.jsonConcat(this.datosAcceso.value, this.datosPersonales.value)
    console.log(trabajador)
    this.trabajadorService.guardarTrabajador(trabajador).subscribe(
      (res: any) => {
        this.loading = false;
        console.log(res)
        Swal.fire(
          '¡Listo!',
          `Trabajador registrado correctamente!`,
          'success'
        )
      },
      err => console.log(err)
    );
  }

}
