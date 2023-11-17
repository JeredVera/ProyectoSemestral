import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

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
      await this.actualizarPerfilUsuario(user, { isCliente, isConductor });
      this.login(email,pass);
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

  private async actualizarPerfilUsuario(user: any, additionalInfo: any) {
    try {
      // Actualiza el perfil del usuario con la información adicional
      await user.updateProfile(additionalInfo);
      
      // Puedes realizar otras acciones aquí según tus necesidades, como almacenar información en tu base de datos
    } catch (error) {
      console.error('Error al actualizar el perfil del usuario: ', error);
    }
  }
}
