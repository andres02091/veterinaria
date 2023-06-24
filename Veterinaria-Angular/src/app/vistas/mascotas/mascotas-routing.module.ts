import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotasTablaComponent } from './mascotas-tabla/mascotas-tabla.component';
import { MascotasFormComponent } from './mascotas-form/mascotas-form.component';

const routes: Routes = [
  {
    path: 'mascotas-tabla',
    component: MascotasTablaComponent
  },
  {
    path: 'mascotas-agregar',
    component: MascotasFormComponent
  },
  {
    path: 'mascotas-editar/:id',
    component: MascotasFormComponent
  },
  {
    path: 'mascotas-detalle/:id/:detalle',
    component: MascotasFormComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotasRoutingModule {}
