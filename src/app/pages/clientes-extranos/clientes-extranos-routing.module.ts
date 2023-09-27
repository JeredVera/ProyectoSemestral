import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesExtranosPage } from './clientes-extranos.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesExtranosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesExtranosPageRoutingModule {}
