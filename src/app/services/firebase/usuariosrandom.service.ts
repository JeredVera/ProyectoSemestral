import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuariosrandomService {

  private randomUserApi = 'https://randomuser.me/api/';
  private firebaseCollectionClient = 'isCliente'; // Cambia a tu nombre de colección en Firebase
  private firebaseCollectionConductor = 'isConductor'; // Cambia a tu nombre de colección en Firebase


  constructor(private http: HttpClient ,private firestore: AngularFirestore) { }

  // METODO PARA OBTENER UN USUARIO ALEATORIO DE LA API
  /*getRandomUser(): Observable<any>{
    return this.httpClient.get('https://randomuser.me/api');
  }*/

  getRandomUsers(count: number) {
    // Use forkJoin to make parallel requests for multiple users
    const requests = Array.from({ length: count }, () => this.http.get<any>(this.randomUserApi));
    return forkJoin(requests);
  }

  addRandomClienteToFirebase(count: number) {
    this.getRandomUsers(count).subscribe(usersData => {
      const users = usersData.map(data => data.results[0]);

      // Add users to Firebase collection "isClient"
      users.forEach(user => {
        this.firestore.collection(this.firebaseCollectionClient).add(user);
      });
    });
  }

  addRandomConductorToFirebase(count: number) {
    this.getRandomUsers(count).subscribe(usersData => {
      const users = usersData.map(data => data.results[0]);

      // Add users to Firebase collection "isClient"
      users.forEach(user => {
        this.firestore.collection(this.firebaseCollectionConductor).add(user);
      });
    });
  }
}
