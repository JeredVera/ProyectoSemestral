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
  listar(){
    this.listaPasajeros = this.pasajerosService.getAll()
  }

  addPasajeros(){
    this.router.navigate(['pasajeros/agregar'])
  }

  handlerRefresh(event: any){
    setTimeout(()=> {
      event.target.complete();
    }, 2000);

  }

  handleReorder(ev: CustomEvent<any>) {
    ev.detail.complete();
  }

  buscarPasajero(event: any){
    const texto = event.target.value;
    if( texto && texto.trim() != ''){
      this.listaPasajeros = this.listaPasajeros.filter((aux: any) =>{
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >-1)
      })

      }
    }
  }

