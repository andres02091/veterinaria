import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasTablaComponent } from './mascotas-tabla/mascotas-tabla.component';
import { MascotasFormComponent } from './mascotas-form/mascotas-form.component';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    MascotasTablaComponent,
    MascotasFormComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MascotasRoutingModule,
    ComponentesModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MascotasService
  ],
})
export class MascotasModule { }
