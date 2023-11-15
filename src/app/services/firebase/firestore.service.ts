import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IConductor } from 'src/app/interfaces/iconductor';
import { IConductores } from 'src/app/interfaces/iconductores';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(nombreColeccion: string) {
    return this.firestore.collection<IConductor>(nombreColeccion).valueChanges({ idField: 'id'});
  }

  createDocument(nombreColeccion: string, data: IConductor) {
    return this.firestore.collection<IConductor>(nombreColeccion).add(data);
  }

  updateDocument(nombreColeccion: string, documentId: string, data: IConductor) {
    return this.firestore.collection<IConductor>(nombreColeccion).doc(documentId).update(data);
  }

  deleteDocument(nombreColeccion: string, documentId: string) {
    return this.firestore.collection<IConductor>(nombreColeccion).doc(documentId).delete();
  }

  getConductorById(nombreColeccion: string, documentId: string){
    return this.firestore.collection<IConductor>(nombreColeccion).doc(documentId).valueChanges();
  }
}
