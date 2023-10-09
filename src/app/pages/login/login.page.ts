import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit { 

  //DECLARACION
  loginForm: FormGroup //VALIDA EL FORMULARIO
  user: any           //CAPTURA INFO USUARIO RANDOM
  emailValue?: string //CAPTURA EMAIL USUARIO RANDOM
  passValue?: string //CAPTURA PASS USUARIO RANDOM

  constructor(private router: Router, private navCtrl: NavController, private usuariosrandom: UsuariosrandomService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })
  }


  ngOnInit() {
    this.usuariosrandom.getRandomUser().subscribe(
      (data) =>{
        //console.log(data)
        this.user = data.results[0] //RELLENAMOS EL USUARIO
        this.emailValue = this.user.email
        this.passValue = this.user.login.password
      })
  }


  login() {
    this.navCtrl.navigateForward('/home');
  }

  register() {
    this.router.navigate(['register']);
  }

  recuperar_pass() {
    this.router.navigate(['recuperar-pass']);
  }

}
