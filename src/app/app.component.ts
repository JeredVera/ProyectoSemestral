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
    { title: 'Conductores', url: '/folder/archived', icon: 'car' },
    { title: 'Terminos y condiciones', url: '/folder/trash', icon: 'warning' },
    { title: 'Cerrar sesion', url: '/folder/spam', icon: 'log-out' },
  ];
  public labels = [''];
  constructor() {}
}
