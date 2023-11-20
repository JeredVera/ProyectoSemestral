import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home-conductores',
  templateUrl: './home-conductores.page.html',
  styleUrls: ['./home-conductores.page.scss'],
})
export class HomeConductoresPage implements OnInit {
  langs: string[] = [];

  constructor(private router: Router,private transService: TranslateService) {     this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }
  

  pasajeros() {
    this.router.navigate(['pasajeros']);
  }

}
