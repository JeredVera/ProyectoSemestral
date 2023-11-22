import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements OnInit {
  code: any;
  langs: string[] = [];

  constructor( private transService: TranslateService) { 
    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }
 
}
