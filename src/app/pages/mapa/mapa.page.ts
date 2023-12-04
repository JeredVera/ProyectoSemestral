import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',                  
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: mapboxgl.Map | undefined;
  accessToken = 'pk.eyJ1IjoidG9uaWtvMjAiLCJhIjoiY2xwcTB4eWtmMHY2czJsa2g4NzdidzQ0OSJ9.bfE8pDOA-dLorGpoaLqYGg'; // Reemplaza con tu clave de acceso

  origenInput: string = '';
  destinoInput: string = '';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.initializeMap();
      this.getCurrentLocation();
    }, 100);
  }

  initializeMap() {
    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.57911988858959, -33.59848740405084],
      zoom: 15,
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  getCurrentLocation() {
    if (navigator.geolocation && this.map) {
        const geolocationOptions = {
            enableHighAccuracy: true,
            timeout: 5000, 
            maximumAge: 0 
          };        
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              if (this.map) {
                this.setCenter(this.map, [longitude, latitude]);
              } else {
                console.error('Map is undefined.');
              }
        }, (error) => {
            console.error('Error getting location:', error);
          },
          geolocationOptions 
        );
      } else {
        console.error('Geolocation is not supported by this browser or map is undefined.');
      }
    }

  setCenter(map: mapboxgl.Map | undefined, coordinates: [number, number]) {
        if (map) {
          map.setCenter(coordinates);
        } else {
          console.error('Map is undefined.');
        }
      }
  
      async generarViaje() {
        if (this.origenInput && this.destinoInput && this.map) {
          try {
        
            const [startLng, startLat] = await this.getCoordinates(this.origenInput);
            const [destLng, destLat] = await this.getCoordinates(this.destinoInput);
      
          
            const startPoint: [number, number] = [startLng, startLat];
            const destinationPoint: [number, number] = [destLng, destLat];

            const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${startLng},${startLat};${destLng},${destLat}?geometries=geojson&access_token=${mapboxgl.accessToken}`);
            const data = await response.json();
      
            if (data.routes && data.routes.length > 0 && data.routes[0].geometry) {
              const routeGeometry = data.routes[0].geometry.coordinates;
      

              if (this.map.getLayer('route')) {
                this.map.removeLayer('route');
                this.map.removeSource('route');
              }
      
              this.map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                  type: 'geojson',
                  data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'LineString',
                      coordinates: routeGeometry,
                    },
                  },
                },
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round',
                },
                paint: {
                  'line-color': 'blue',
                  'line-width': 8,
                },
              });
            
              const bounds = routeGeometry.reduce(
                (bounds: mapboxgl.LngLatBounds, coord: [number, number]) => bounds.extend(coord),
                new mapboxgl.LngLatBounds(routeGeometry[0], routeGeometry[0])
              );
              this.map.fitBounds(bounds, { padding: 50 });
            } else {
              console.error('No se pudo encontrar una ruta.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          console.error('Por favor ingresa tanto el origen como el destino.');
        }
      }
      
      
  async getCoordinates(query: string): Promise<[number, number]> {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      return [lng, lat];
    } else {
      throw new Error('Location not found');
    }
  }
}



 
    
  