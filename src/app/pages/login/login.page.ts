import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth.service';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit { 

  loginForm: FormGroup;

  constructor(private router: Router, private navCtrl: NavController, private usuariosrandom: UsuariosrandomService, private formBuilder: FormBuilder, private authService: AuthServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  ngOnInit() {
    
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.authenticateUser(email, password).subscribe(
        (response) => {
          console.log('Autenticación exitosa', response);
          this.router.navigate(['/home-conductores']);
        },
        (error) => {
          // Maneja los errores de autenticación aquí.
          console.error('Error de autenticación', error);
        }
      );
      this.authService.authenticateClient(email, password).subscribe(
        (response) => {
          console.log('Autenticación exitosa', response);
          this.router.navigate(['/home']);
        },
        (error) => {
          // Maneja los errores de autenticación aquí.
          console.error('Error de autenticación', error);
        }
      );
    }
  }

  register() {
    this.router.navigate(['register']);
  }

  recuperar_pass() {
    this.router.navigate(['recuperar-pass']);
  }

}
