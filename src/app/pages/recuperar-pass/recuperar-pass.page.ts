import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {
  langs: string[] = [];

  constructor(private transService: TranslateService) {
    this.langs = this.transService.getLangs();

   }

  ngOnInit() {
  }

}
