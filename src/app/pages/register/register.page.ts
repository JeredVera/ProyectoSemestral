import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  Usuarios: IUsuario[] = [];

  constructor(private router: Router, private apiService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }

  obtenerYEnviarUsuario() {
    this.apiService.obtenerUsuario().subscribe(
      (data: IUsuario) => {
        this.apiService.enviarUsuario(data).subscribe(
          response => {
            console.log(response);
            this.Usuarios = this.apiService.getUsers();
          },
          error => {
            console.error('Error al enviar datos a la API en Render:', error);
          }
        );
      },
      error => {
        console.error('Error al obtener datos de randomuser.me:', error);
      }
    );
  }
  

}
