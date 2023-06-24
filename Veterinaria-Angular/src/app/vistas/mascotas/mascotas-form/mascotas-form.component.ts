import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MascotasService } from './../../../servicios/mascotas.service';
import { Mascota } from 'src/app/modelos/mascota';
@Component({
  selector: 'app-mascotas-form',
  templateUrl: './mascotas-form.component.html',
  styleUrls: ['./mascotas-form.component.css']
})
export class MascotasFormComponent implements OnInit {
  mascotaForm!: FormGroup;
  idMascota = 0;
  detalle = 0;
  loading=false;
  constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute,
    private snackBar: MatSnackBar, private router: Router, private mascotasService: MascotasService) { }

  ngOnInit() {
    this.mascotaForm = this.formBuilder.group({
      id:[''],
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      raza: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      idDueno: ['', Validators.required]
    });
    if (this.rutaActiva.snapshot.params['id'] || this.rutaActiva.snapshot.params['detalle']) {
      this.idMascota = this.rutaActiva.snapshot.params['id'];
      this.detalle = this.rutaActiva.snapshot.params['detalle'] ? 1 : 0;
      this.mascotasService.obtenerMascotasId(this.idMascota).subscribe((data: Mascota) => {
        this.mascotaForm.patchValue({
          id:data.id,
          nombre: data.nombre,
          especie: data.especie,
          raza: data.raza,
          fechaNacimiento: data.fechaNacimiento,
          idDueno: data.idDueno
        })
      })
    }

  }

  IrRuta(route: string): void {
    this.router.navigate([route]);
  }

  submitForm() {
    if (this.mascotaForm.invalid) {
      return;
    }
    this.loading=true;
    if(this.idMascota!=0){
      this.mascotasService.actualizarMascota(this.mascotaForm.getRawValue()).subscribe(data=>{
        this.snackBar.open("Registro Actualizado", '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snackbar-success'
        });
        this.loading=false;
        this.IrRuta('/mascotas/mascotas-tabla');
      },error=>{
        this.snackBar.open("Error En Actualizacion", '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snackbar-danger'
        });
        this.loading=false;
      })
    }else{
      this.mascotasService.crearMascota(this.mascotaForm.getRawValue()).subscribe(data=>{
        this.snackBar.open("Mascota Creada", '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snackbar-success'
        });
        this.loading=false;
        this.IrRuta('/mascotas/mascotas-tabla');
      },error=>{
        this.snackBar.open("Error Al Crear Mascota", '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snackbar-danger'
        });
        this.loading=false;
      })
    }
  }


}
