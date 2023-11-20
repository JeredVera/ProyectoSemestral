import { Component, OnInit } from '@angular/core';
import { Conductor_Favorito } from '../conductores-favoritos.model';
import { ConductoresFavoritosService } from 'src/app/services/conductores-favoritos.service';
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

  conductores_favoritos! : Conductor_Favorito;

  constructor(private toastController: ToastController,private alertController: AlertController,private conductoresFavoritosService: ConductoresFavoritosService, private router: Router, private activatedRoute: ActivatedRoute,private transService: TranslateService) { 
    this.langs = this.transService.getLangs();

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param =>{
      const aux = param.get('id')
      if(aux){
        this.conductores_favoritos = this.conductoresFavoritosService.getConductor_Favorito(aux)
      }
    })
  }

  mapa_pasajeros(){
    this.router.navigate(['mapa-pasajero'])
  }
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 200,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteConductor(){
    const alerta = await this.toastController.create({
      header: 'Eliminar',
      message: 'estas seguro de quieres eliminar al conductor?',
      buttons: [{
        text: 'Eliminar',
        handler: () => {
          if(this.conductores_favoritos && this.conductores_favoritos.id !== undefined){
            this.conductoresFavoritosService.deleteConductores(this.conductores_favoritos.id);
            this.router.navigate(['/conductores-favoritos']);
            this.mensajeToast("conductor eliminado")
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

