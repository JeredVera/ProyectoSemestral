import { Component, OnInit } from '@angular/core';
import { Conductor } from '../conductores.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  langs: string[] = [];

  conductor!: Conductor;

  constructor(private conductoresService: ConductoresService, private router: Router, private activatedRoute: ActivatedRoute,private transService: TranslateService ) {
    this.langs = this.transService.getLangs();

   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if(aux){
        this.conductor = this.conductoresService.getConductor(aux)
      }
    })
  }

  llamar(){
    this.router.navigate(['/mapa'])
  }

}
