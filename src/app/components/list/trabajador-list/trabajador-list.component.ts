import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../../services/trabajador.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-trabajador-list',
  templateUrl: './trabajador-list.component.html',
  styleUrls: ['./trabajador-list.component.css']
})
export class TrabajadorListComponent implements OnInit {
  
  trabajadores: any = [];
  dataSource:any;

  displayedColumns: string[] = ['sIdTipoDocumento', 'sNumeroDocumento', 'sApellidoPaterno', 
                                'sApellidoMaterno', 'sNombres', 'sTipoTrabajador'];

  constructor(
    public trabajadorService: TrabajadorService
  ) { }

  ngOnInit() {
    this.trabajadorService.getTrabajadores().subscribe(
      res => {
        this.trabajadores = res;
        this.dataSource = new MatTableDataSource(this.trabajadores);
      },
      err => console.log(err)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
