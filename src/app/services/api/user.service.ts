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

  obtenerUsuario(): Observable<IUsuario> {
    return this.http.get<IUsuario>('https://randomuser.me/api');
  }

  enviarUsuario(usuario: IUsuario): Observable<any> {
    this.Usuarios.push(usuario); // Agrega el usuario a la lista local
    return this.http.post('https://jsonserver-ttvf.onrender.com/usuarios', usuario);
  }

  getUsers(): IUsuario[] {
    return this.Usuarios;
  }
}
