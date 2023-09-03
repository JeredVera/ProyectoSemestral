import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasajero } from './pasajeros.model';
import { PasajerosService } from 'src/app/services/pasajeros.service';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage implements OnInit {

  listaPasajeros: Pasajero[] = [];
  constructor(private router: Router, private pasajerosService: PasajerosService) { }

  ngOnInit() {
    this.listaPasajeros = this.pasajerosService.getAll()
  }

}
