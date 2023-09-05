import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductoresFavoritosPage } from './conductores-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: ConductoresFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductoresFavoritosPageRoutingModule {}
