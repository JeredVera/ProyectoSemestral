import { Component, OnInit } from '@angular/core';
import { Pasajero } from '../pasajeros.model';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pasajero!: Pasajero;

  constructor(private pasajerosService: PasajerosService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if(aux){
        this.pasajero = this.pasajerosService.getPasajero(aux)
      }
    })
  }

}
