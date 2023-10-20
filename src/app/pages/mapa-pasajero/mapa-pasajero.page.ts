import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: './mapa-pasajero',
  templateUrl: './mapa-pasajero.page.html',
  styleUrls: ['./mapa-pasajero.page.scss'],
})
export class MapaPasajero {
  
  map?: L.Map;

  constructor(){}

  ngOnInti(){
    this.map = L.map('map',{
      center: [ 25.3791924,55.4765436 ],
      zoom: 15,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    }).addTo(this.map)
  }

}