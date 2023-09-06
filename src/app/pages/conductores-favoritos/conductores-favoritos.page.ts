import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresFavoritosService } from 'src/app/services/conductores-favoritos.service';
import { Conductor_Favorito } from './conductores-favoritos.model';

@Component({
  selector: 'app-conductores-favoritos',
  templateUrl: './conductores-favoritos.page.html',
  styleUrls: ['./conductores-favoritos.page.scss'],
})
export class ConductoresFavoritosPage implements OnInit {

  listaConductoresFavoritos: Conductor_Favorito[] = [];

  constructor(private conductoresfavoritosService: ConductoresFavoritosService, private router: Router) { }

  ngOnInit() {
    this.listaConductoresFavoritos = this.conductoresfavoritosService.getAll()
  }

  listar(){
    this.listaConductoresFavoritos = this.conductoresfavoritosService.getAll()
  }

  addConductores(){
    this.router.navigate(['conductores-favoritos/agregar'])
  }

   buscarConductor(event: any){
    const texto = event.target.value;
    if( texto && texto.trim() != ''){
      this.listaConductoresFavoritos = this.listaConductoresFavoritos.filter((aux: any) =>{
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >-1)
      })

      }
    }
}
