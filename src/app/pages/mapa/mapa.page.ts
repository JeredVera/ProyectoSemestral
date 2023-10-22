import { Component } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage {

  map: L.Map

  constructor() {}

  ngOnInit() {
    this.map = L.map('map', {
      center: [ 25.3791924,55.4765436 ],
      zoom: 15,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    }).addTo(this.map)

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

}
