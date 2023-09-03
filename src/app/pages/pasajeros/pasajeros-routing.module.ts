import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajerosPage } from './pasajeros.page';

const routes: Routes = [
  {
    path: '',
    component: PasajerosPage
  },  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasajerosPageRoutingModule {}
