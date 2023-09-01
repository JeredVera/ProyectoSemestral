import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuenta', url: '/folder/inbox', icon: 'person' },
    { title: 'Privacidad y Seguridad', url: '/folder/outbox', icon: 'lock-closed' },
    { title: 'Mensajes', url: '/folder/favorites', icon: 'card' },
    { title: 'Conductores', url: 'conductores', icon: 'car' },
    { title: 'Codigo QR', url: '#', icon: 'qr-code' },
    { title: 'Terminos y condiciones', url: '/folder/trash', icon: 'warning' },
    { title: 'Cerrar sesion', url: 'login', icon: 'log-out' },
  ];
  public labels = [''];
  constructor() {}
}
