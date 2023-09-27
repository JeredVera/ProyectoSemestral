import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesExtranosPageRoutingModule } from './clientes-extranos-routing.module';

import { ClientesExtranosPage } from './clientes-extranos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesExtranosPageRoutingModule
  ],
  declarations: [ClientesExtranosPage]
})
export class ClientesExtranosPageModule {}
