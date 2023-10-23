import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { ClienteService } from 'src/app/services/api/cliente.service';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  Usuarios: IUsuario[] = [];

  constructor(private router: Router, private userService: UserService, private clienteService: ClienteService) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }

  transferUsers() {
    this.userService.transferUsersToRenderAPI();
    this.clienteService.transferUsersToRenderAPI();
  }
  

}
