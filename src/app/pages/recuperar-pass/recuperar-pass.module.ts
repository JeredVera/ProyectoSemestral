import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPassPageRoutingModule } from './recuperar-pass-routing.module';

import { RecuperarPassPage } from './recuperar-pass.page';
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPassPageRoutingModule,
    TranslateModule
  ],
  declarations: [RecuperarPassPage]
})
export class RecuperarPassPageModule {}
