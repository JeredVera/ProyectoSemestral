import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductoresPageRoutingModule } from './conductores-routing.module';

import { ConductoresPage } from './conductores.page';
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductoresPageRoutingModule,
    TranslateModule
  ],
  declarations: [ConductoresPage]
})
export class ConductoresPageModule {}
