import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.sass'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mascotasService: MascotasService,
    private snackBar: MatSnackBar
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.mascotasService.eliminarMascota(this.data.id).subscribe(data=>{
      this.snackBar.open("Registro Eliminado", '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snackbar-success'
      });
      this.onNoClick();
    },error=>{
      this.snackBar.open("Error Al Eliminar", '', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: 'snackbar-danger'
      });
      this.onNoClick();
    });
  }
}
