import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from 'src/app/interfaces/icliente';
import { IClientes } from 'src/app/interfaces/iclientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) { }

  transferUsersToRenderAPI() {
    const randomUserUrl = 'https://randomuser.me/api/?results=10';
    this.http.get(randomUserUrl).subscribe((randomUsers: any) => {
      const renderApiUrl = 'https://jsonserver-ttvf.onrender.com/clientes';
      this.http.post(renderApiUrl, randomUsers.results).subscribe(response => {
        console.log('Usuarios transferidos a tu API en Render:', response);
      });
    });
  }
  
}
