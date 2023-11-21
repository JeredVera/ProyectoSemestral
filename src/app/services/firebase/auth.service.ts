import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth, 
    private router: Router
  ) { }

  async login(email: string, pass: string){
    try {
      const user = await this.auth.signInWithEmailAndPassword(email,pass);
      if(user){
        this.router.navigate(['home']);
      }
      console.log(user); 
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async register(email: string, pass: string, isCliente: boolean, isConductor: boolean){
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email,pass);
      if(isCliente === true){
        await this.agregarCliente(user, { isCliente, isConductor });
        this.login(email,pass);
      }
      if(isConductor === true){
        await this.agregarConductor(user, { isCliente, isConductor });
        this.login(email,pass);
      }
      //this.login(email,pass);
      console.log(user); 
    } catch (error) {
      console.error('Error en register: ', error);
    }
  }

  async logout(){
    try {
      await this.auth.signOut();
      //this.router.navigate(['login']);
    } catch (error) {
      console.error('Error en Logout: ', error);
    }
  }

  checkAuth(){
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });
  }

  private async agregarCliente(user: any, additionalInfo: any) {
    try {
      const data = { user, additionalInfo };
      
      // Verificar que los datos sean serializables
      const serializableData = JSON.parse(JSON.stringify(data));

      return await this.firestore.collection('isCliente').add(serializableData);
    } catch (error: any) {
      console.error('Error al actualizar el perfil del Cliente: ', error);

      // Manejar el error
      throw new Error('Error al actualizar el perfil del Cliente: ' + (error.message || ''));
    }
  }
  

  private async agregarConductor(user: any, additionalInfo: any) {
    try {
      const data = { user, additionalInfo };

      // Verificar que los datos sean serializables
      const serializableData = JSON.parse(JSON.stringify(data));

      return await this.firestore.collection('isConductor').add(serializableData);
    } catch (error: any) {
      console.error('Error al actualizar el perfil del Cliente: ', error);

      // Manejar el error
      throw new Error('Error al actualizar el perfil del Cliente: ' + (error.message || ''));
    }
  }

  resetPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }
  
}
