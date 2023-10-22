import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConductor } from 'src/app/interfaces/iconductor';
import { IConductores } from 'src/app/interfaces/iconductores';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {
  apiURL = "https://jsonserver-ttvf.onrender.com";
  constructor(private httpClient: HttpClient) { }

  listConductores(): Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${this.apiURL}/conductores`);
  }

  addConductores(conductor: IConductor): Observable<IConductor>{
    return this.httpClient.post<IConductor>(`${this.apiURL}/conductores`, conductor);
  }

  getConductores(id: Number): Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${this.apiURL}/conductores/?id=${id}`);
  }

  updateConductores(conductor: any): Observable<IConductores>{
    return this.httpClient.put<IConductores>(`${this.apiURL}/conductores/${conductor.id}`, conductor);
  }

  deleteConductores(conductor: any): Observable<IConductores>{
    return this.httpClient.delete<IConductores>(`${this.apiURL}/conductores/${conductor.id}`);
  }
}
