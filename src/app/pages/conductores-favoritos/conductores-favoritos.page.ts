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

}
