import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { AuthService } from 'src/app/services/firebase/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  langs: string[] = [];
  email: string = "";

  constructor(private transService: TranslateService ,private authService: AuthService, private router: Router) {
    this.langs = this.transService.getLangs();
   }

  ngOnInit() {
  }
  
  resetPassword() {
    if (this.email) {
      this.authService.resetPassword(this.email)
        .then(() => {
          // Éxito: el correo de restablecimiento fue enviado
          console.log('Correo de restablecimiento enviado con éxito');
          this.mensaje();
          this.router.navigate(['login']);
          // Puedes redirigir a una página de confirmación o hacer otras acciones necesarias
        })
        .catch((error) => {
          // Manejo de errores
          console.error('Error al enviar el correo de restablecimiento', error);
        });
    } else {
      console.error('Correo electrónico no proporcionado');
    }
  }
  
  mensaje(){
    Swal.fire({
      icon: 'success',
      title: 'Correo Enviado',
      heightAuto: false,
    })
  }

}
