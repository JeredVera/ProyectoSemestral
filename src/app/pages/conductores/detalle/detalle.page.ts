import { Component, OnInit } from '@angular/core';
import { Conductor } from '../conductores.model';
import { ConductoresService } from 'src/app/services/conductores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  conductor!: Conductor;

  constructor(private conductoresService: ConductoresService, private router: Router, private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if(aux){
        this.conductor = this.conductoresService.getConductor(aux)
      }
    })
  }

  mapa_pasajeros(){
    this.router.navigate(['mapa-pasajero'])
  }

}
