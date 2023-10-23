import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private userData: any;

  private apiUrl = 'https://jsonserver-ttvf.onrender.com'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  authenticateUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, { email, password });
  }

  authenticateClient(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/clientes`, { email, password });
  }

  getUsername(): string {
    return this.userData ? this.userData.username : '';
  }
}
