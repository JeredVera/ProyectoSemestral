import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  Usuarios: IUsuario[] = [];

  constructor(private http: HttpClient) { }

  transferUsersToRenderAPI() {
    const randomUserUrl = 'https://randomuser.me/api/?results=10';
    this.http.get(randomUserUrl).subscribe((randomUsers: any) => {
      const renderApiUrl = 'https://jsonserver-ttvf.onrender.com/usuarios';
      this.http.post(renderApiUrl, randomUsers.results).subscribe(response => {
        console.log('Usuarios transferidos a tu API en Render:', response);
      });
    });
  }
}
