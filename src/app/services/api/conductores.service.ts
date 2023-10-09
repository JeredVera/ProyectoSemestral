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

  constructor(private httpClient: HttpClient) { }

  listConductores(): Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiURL}/conductores`);
  }

  addConductores(conductor: IConductor): Observable<IConductor>{
    return this.httpClient.post<IConductor>(`${environment.apiURL}/conductores`, conductor);
  }

  getConductores(id: Number): Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiURL}/conductores/?id=${id}`);
  }

  updateConductores(conductor: any): Observable<IConductores>{
    return this.httpClient.put<IConductores>(`${environment.apiURL}/conductores/${conductor.id}`, conductor);
  }

  deleteConductores(conductor: any): Observable<IConductores>{
    return this.httpClient.delete<IConductores>(`${environment.apiURL}/conductores/${conductor.id}`);
  }
}
