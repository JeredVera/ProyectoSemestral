import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesrandomPageRoutingModule } from './clientesrandom-routing.module';

import { ClientesrandomPage } from './clientesrandom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesrandomPageRoutingModule
  ],
  declarations: [ClientesrandomPage]
})
export class ClientesrandomPageModule {}
