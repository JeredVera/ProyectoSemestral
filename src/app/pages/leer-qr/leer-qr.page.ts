import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.page.html',
  styleUrls: ['./leer-qr.page.scss'],
})
export class LeerQrPage implements OnInit {
  code: any;
  langs: string[] = [];

  constructor(private barcodeScanner: BarcodeScanner, private transService: TranslateService) { 
    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
