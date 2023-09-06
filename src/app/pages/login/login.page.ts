import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit { 

  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';

  constructor(private router: Router, private navCtrl: NavController) {}


  ngOnInit() {
  }


  login() {
    this.emailError = 'Ingresa El Nombre de Usuario Correctamente';
    this.passwordError = 'Ingresa La Contraseña Correctamente';

    if (this.email === 'Cliente' && this.password === 'Cliente123') {
      this.navCtrl.navigateForward('/home');
    } else if (this.email === 'Conductor' && this.password === 'Conductor123'){
      this.navCtrl.navigateForward('/home-conductores')
    } else {
      console.log('Nombre de Usuario y/o Contraseña Incorrecta');
    }
  }

  register() {
    this.router.navigate(['register']);
  }

  recuperar_pass() {
    this.router.navigate(['recuperar-pass']);
  }

}
