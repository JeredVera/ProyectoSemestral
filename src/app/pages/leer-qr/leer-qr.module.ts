import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerQrPageRoutingModule } from './leer-qr-routing.module';

import { LeerQrPage } from './LeerQrPage';
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerQrPageRoutingModule,
    TranslateModule
  ],
  declarations: [LeerQrPage]
})
export class LeerQrPageModule {}
