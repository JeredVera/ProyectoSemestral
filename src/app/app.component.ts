import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuenta', url: 'cuenta', icon: 'person' },
    { title: 'Privacidad y Seguridad', url: 'privacidad', icon: 'lock-closed' },
    { title: 'Mensajes', url: 'message', icon: 'card' },
    { title: 'Codigo QR', url: 'codigo-qr', icon: 'qr-code' },
    { title: 'Leer Codigo QR', url: 'leer-qr', icon: 'qr-code' },
    { title: 'API', url: 'apihome', icon: 'globe' },
    { title: 'API-Clientes Extraños', url: 'clientes-extranos', icon: 'help' },
    { title: 'API-Clientes Random', url: 'clientesrandom', icon: 'help' },
    { title: 'Mapa', url: 'mapa', icon: 'map' },
    { title: 'Terminos y condiciones', url: 'terminos', icon: 'warning' },
    { title: 'Cerrar sesion', url: 'login', icon: 'log-out' },
  ];
  public appAPI = [
    { title: 'Home', url: 'apihome', icon: 'home' },
    { title: 'List', url: 'apilist', icon: 'lock-closed' },
    { title: 'Add', url: 'apiadd', icon: 'card' },
    { title: 'Delete', url: 'apidelete', icon: 'qr-code' },
    { title: 'Detail', url: 'apidetail', icon: 'qr-code' },
    { title: 'Update', url: 'apiupdate', icon: 'globe' },
    { title: 'Cerrar sesion', url: 'login', icon: 'log-out' },
  ];
  public labels = [''];

  constructor(private router: Router, menuController: MenuController) {}

  mostrarMenu(){
    return this.router.url !== '/login'; // NO SE VA A MOSTRAR EN EL LOGIN 
  }

  mostrarMenuApi(){
    const aux = ['apihome','apiadd','apilist','apidelete','apiupdate','apidetail']
    return aux.includes(this.router.url.substring(1)); // ELIMINAMOS EL "/"
    //return this.router.url == '/apihome';
  }
}
