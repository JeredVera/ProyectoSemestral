import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-confirmar-qr',
  templateUrl: './confirmar-qr.page.html',
  styleUrls: ['./confirmar-qr.page.scss'],
})
export class ConfirmarQrPage implements OnInit {
  langs: string[] = [];

  constructor(private transService: TranslateService) { 
    this.langs = this.transService.getLangs();

  }

  ngOnInit() {
  }
 
}
