import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: L.Map;
  ruta: [number, number][]; // Define ruta como una propiedad

  constructor() {
    this.map = {} as L.Map;
    this.ruta = [ // Inicializa la ruta
      [-33.616692, -70.613445],  // Punto de inicio
      [-33.612260, -70.578769],         // Punto intermedio
      [-33.604111, -70.576795],         // Punto intermedio
      [-33.598106, -70.578297],         // Punto final
    ];
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView([25.3791924, 55.4765436], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    // Usa this.ruta en lugar de ruta
    const polyline = L.polyline(this.ruta, { color: 'blue' }).addTo(this.map);
  }
}
