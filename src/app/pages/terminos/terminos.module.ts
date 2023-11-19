import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosPageRoutingModule } from './terminos-routing.module';
import { TranslateModule } from '@ngx-translate/core'
import { TerminosPage } from './terminos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosPageRoutingModule,
    TranslateModule
  ],
  declarations: [TerminosPage]
})
export class TerminosPageModule {}
