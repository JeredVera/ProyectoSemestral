import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from './conductores.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {
  langs: string[] = [];

  listaConductores: Conductor[] = [];

  constructor(private router: Router, private conductoresService: ConductoresService,private transService: TranslateService) { 
    this.langs = this.transService.getLangs();

  }

  ngOnInit() {
    this.listaConductores = this.conductoresService.getAll()
  }

  conductores_favoritos(){
    this.router.navigate(['conductores-favoritos'])
  }
}
