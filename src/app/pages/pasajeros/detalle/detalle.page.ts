import { Component, OnInit } from '@angular/core';
import { Pasajero } from '../pasajeros.model';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  langs: string[] = [];

  pasajero!: Pasajero;

  constructor(private alertController: AlertController,private toastController: ToastController,private pasajerosService: PasajerosService, private router: Router, private activatedRoute: ActivatedRoute,private transService: TranslateService ) { 
    this.langs = this.transService.getLangs();

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if(aux){
        this.pasajero = this.pasajerosService.getPasajero(aux)
      }
    })
  }

  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 200,
      position: 'bottom'

    });
    toast.present()
  }

   async deletePasajero(){
  const alerta = await this.toastController.create({
    header: 'Eliminar',
    message: 'estas seguro de quieres eliminar al pasajero?',
    buttons: [{
      text: 'Eliminar',
      handler: () => {
        if(this.pasajero && this.pasajero.id !== undefined){
          this.pasajerosService.deletePasajero(this.pasajero.id);
          this.router.navigate(['/pasajeros']);
          this.mensajeToast("pasajero eliminado")
        }else{
           
        }
      }
    },
    {
      text: 'cancelar',
      handler: () => {
        this.mensajeToast("accion cancelada")
      }
    }

    ]
  });
await alerta.present();
let resultado = await alerta.onDidDismiss;
    }
}
