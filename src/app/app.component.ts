import { Component } from '@angular/core';
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
    { title: 'Terminos y condiciones', url: 'terminos', icon: 'warning' },
    { title: 'Cerrar sesion', url: 'login', icon: 'log-out' },
  ];
  public labels = [''];
  constructor() {}
}
