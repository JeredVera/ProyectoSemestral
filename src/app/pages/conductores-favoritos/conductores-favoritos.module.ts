import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresFavoritosPageRoutingModule } from './conductores-favoritos-routing.module';

import { ConductoresFavoritosPage } from './conductores-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresFavoritosPageRoutingModule
  ],
  declarations: [ConductoresFavoritosPage]
})
export class ConductoresFavoritosPageModule {}
