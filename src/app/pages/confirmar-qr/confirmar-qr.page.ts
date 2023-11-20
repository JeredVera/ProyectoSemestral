import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-confirmar-qr',
  templateUrl: './confirmar-qr.page.html',
  styleUrls: ['./confirmar-qr.page.scss'],
})
export class ConfirmarQrPage implements OnInit {
  langs: string[] = [];

  constructor(private barcodeScanner: BarcodeScanner,private transService: TranslateService) { 
    this.langs = this.transService.getLangs();

  }

  ngOnInit() {
  }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
