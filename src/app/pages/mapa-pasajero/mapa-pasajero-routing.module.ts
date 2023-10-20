import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPasajero } from './mapa-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPasajero
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPasajeroPageRoutingModule {}
