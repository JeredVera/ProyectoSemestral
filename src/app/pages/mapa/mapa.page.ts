import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: L.Map;
  routingControl: any;
  currentPosition: L.Marker | null = null;
  geocoder: any;

  constructor() {
    this.map = {} as L.Map;
  }

  ngOnInit() {
    this.initializeMap();
    this.getCurrentLocation();
  }

  initializeMap() {
    this.map = L.map('map').setView([-33.59848740405084, -70.57911988858959], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    this.geocoder = (L.Control as any).geocoder({
      collapsed: true,
      placeholder: 'Buscar...',
    }).addTo(this.map);

    this.routingControl = (L.Routing as any).control({
      waypoints: [],
      routeWhileDragging: true,
      geocoder: this.geocoder,
    }).addTo(this.map);
  }

  getCurrentLocation() {
    // Código para obtener la ubicación actual...
  }

  generarViaje() {
    // Obtener los lugares seleccionados del buscador (aquí deberías tener lógica para obtener esos lugares)
    const startPoint = L.latLng(-33.59848740405084, -70.57911988858959);
    const destinationPoint = L.latLng(-33.5691535, -70.556041);

    // Actualizar los waypoints del control de enrutamiento con los puntos seleccionados
    this.routingControl.setWaypoints([startPoint, destinationPoint]);

    // Establecer la vista del mapa centrada en uno de los puntos (por ejemplo, el inicio)
    this.map.setView([startPoint.lat, startPoint.lng], 15);
  }
}
