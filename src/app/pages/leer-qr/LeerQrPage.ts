import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FotoService } from 'src/app/services/foto.service';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements OnInit {
  code: any;
  langs: string[] = [];

  constructor(private transService: TranslateService, public fotoService: FotoService) {
    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }

  addPhotoToGallery(){
    this.fotoService.addNewToGallery()
  }

}
