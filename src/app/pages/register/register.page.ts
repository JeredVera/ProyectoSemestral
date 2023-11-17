import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { ClienteService } from 'src/app/services/api/cliente.service';
import { UserService } from 'src/app/services/api/user.service';
import { AuthService } from 'src/app/services/firebase/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  Usuarios: IUsuario[] = [];
  emailValue?: string;
  passValue?:  string;
  checkbox1Checked: boolean = false;
  checkbox2Checked: boolean = false;
  registerForm: FormGroup;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private clienteService: ClienteService,
    private AuthService: AuthService,
    private formBuilder: FormBuilder
    ) {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cliente: [false], // Agregamos un control para el checkbox de cliente
        conductor: [false], // Agregamos un control para el checkbox de conductor
      });
     }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }
  
  register(){
    if(this.emailValue && this.passValue){
      this.AuthService.register(this.emailValue, this.passValue, this.checkbox1Checked, this.checkbox2Checked);
      //this.router.navigate(['home']);
      this.MensajeToast();
    }
  }

  transferUsers() {
    this.userService.transferUsersToRenderAPI();
    this.clienteService.transferUsersToRenderAPI();
  }

  check(checkboxNumero: number){
    if (checkboxNumero === 1) {
      this.checkbox2Checked = !this.checkbox1Checked;
    } else {
      this.checkbox1Checked = !this.checkbox2Checked;
    }
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
      title: 'Usuario Registrado!'
    })
  }

}
