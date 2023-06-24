import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDialogComponent } from '../dialogs/delete/delete.component';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { Mascota } from 'src/app/modelos/mascota';



@Component({
  selector: 'app-mascotas-tabla',
  templateUrl: './mascotas-tabla.component.html',
  styleUrls: ['./mascotas-tabla.component.scss']
})
export class MascotasTablaComponent
  implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'especie', 'raza', 'fechaNacimiento', 'idDueno', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>([]);
  lenghtTabla = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private router: Router, private mascotasService: MascotasService) { }


  ngOnInit() {
    this.mascotasService.obtenerMascotas().subscribe(data => {
      this.dataSource.data = data;
      this.lenghtTabla=data.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  refrescar(){
    this.mascotasService.obtenerMascotas().subscribe(data => {
      this.dataSource.data = data;
      this.lenghtTabla=data.length;
    })
  }

  applyFilter(event: any) {
    var filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  IrRuta(route: string): void {
    this.router.navigate([route]);
  }

  borrarMascota(row: any) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.refrescar();
    });
  }




}

