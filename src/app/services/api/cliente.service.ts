import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from 'src/app/interfaces/icliente';
import { IClientes } from 'src/app/interfaces/iclientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private httpClient: HttpClient) { }

  
}
