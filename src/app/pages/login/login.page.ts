import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth.service';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';
import Swal from 'sweetalert2';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit { 
  langs: string[] = [];

  loginForm: FormGroup;
  emailValue?: string;
  passValue?:  string;


  constructor( private transService: TranslateService,
    private router: Router, 
    private navCtrl: NavController, 
    private usuariosrandom: UsuariosrandomService, 
    private formBuilder: FormBuilder, 
    private authService: AuthServiceService,
    private AuthService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.langs = this.transService.getLangs();

  }


  ngOnInit() {
    this.AuthService.checkAuth()
    .then((user) =>{
      if(user) {
        this.router.navigate(['home']);
      }
    })
    .catch((error) => {
      console.error('Error en autenticacion: ', error)
    });
  }


  /*onSubmit() {
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
  }*/

  login(){
    if(this.emailValue && this.passValue){
      this.AuthService.login(this.emailValue, this.passValue);
      //this.router.navigate(['home']);
      //this.MensajeToast();
    }
  }

  register() {
    this.router.navigate(['register']);
  }

  recuperar_pass() {
    this.router.navigate(['recuperar-pass']);
  }




  MensajeToast(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Bienvenido Al Sistema!'
    })
  }

}
