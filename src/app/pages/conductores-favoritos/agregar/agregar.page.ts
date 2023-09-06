import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConductoresFavoritosService } from 'src/app/services/conductores-favoritos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private router: Router, private conductoresFavoritosService: ConductoresFavoritosService,private toastController: ToastController ) { }

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

  addConductor(nombre: any, imagen: any, edad: any, descripcion:any){
    this.conductoresFavoritosService.agregarConductor(nombre.value,imagen.value, edad.value, descripcion.value );
    this.mensajeToast("Conductor Favorito agregado");
    this.router.navigate(['/conductores-favoritos']);
    
  }
}
