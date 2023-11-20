import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  langs: string[] = [];

  constructor(private transService: TranslateService) {     this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }

}
