import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDialogComponent } from '../dialogs/delete/delete.component';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';
export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  fechaNacimiento: string;
  idDueno: number;
}

const MASCOTAS_DATA: Mascota[] = [
  // Aquí puedes agregar tus datos de mascotas
  { id: 1, nombre: 'Mascota 1', especie: 'Perro', raza: 'Labrador', fechaNacimiento: '01/01/2022', idDueno: 1 },
  { id: 2, nombre: 'Mascota 2', especie: 'Gato', raza: 'Persa', fechaNacimiento: '01/02/2022', idDueno: 2 },
  { id: 3, nombre: 'Mascota 3', especie: 'Perro', raza: 'Bulldog', fechaNacimiento: '01/03/2022', idDueno: 1 },
];


@Component({
  selector: 'app-mascotas-tabla',
  templateUrl: './mascotas-tabla.component.html',
  styleUrls: ['./mascotas-tabla.component.scss']
})
export class MascotasTablaComponent
  implements OnInit {

    displayedColumns: string[] = ['id', 'nombre', 'especie', 'raza', 'fechaNacimiento', 'idDueno','acciones'];
    dataSource = new MatTableDataSource<Mascota>(MASCOTAS_DATA);
    lenghtTabla=MASCOTAS_DATA.length;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(public dialog: MatDialog,private router: Router,private mascotasService: MascotasService) {}

    
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: any) {
      var filterValue=event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    IrRuta(route: string): void {
      this.router.navigate([route]);
    }

    borrarMascota(row:any) {
      
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: row
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result === 1) {
          

        }
      });
    }
    
    


}

