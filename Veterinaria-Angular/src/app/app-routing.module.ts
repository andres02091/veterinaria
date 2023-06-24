import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/mascotas/mascotas-tabla', pathMatch: 'full' },
  {
    path: 'mascotas',
    loadChildren: () =>
      import('./vistas/mascotas/mascotas.module').then((m) => m.MascotasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
