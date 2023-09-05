import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PasajerosService } from 'src/app/services/pasajeros.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private PasajeroService: PasajerosService,
    private router: Router, private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 200,
      position: 'bottom'

    });
    toast.present()
  }

addPasajeros(nombre: any, imagen: any, edad: any, descripcion:any, telefono:any, direccion:any){
this.PasajeroService.addPasajero(nombre.value,imagen.value, edad.value, descripcion.value,telefono.value,direccion.value );
this.mensajeToast("Pasajero agregado");
this.router.navigate(['/pasajeros']);

}
}
