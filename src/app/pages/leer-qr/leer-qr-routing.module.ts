import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerQrPage } from './LeerQrPage';

const routes: Routes = [
  {
    path: '',
    component: LeerQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerQrPageRoutingModule {}
