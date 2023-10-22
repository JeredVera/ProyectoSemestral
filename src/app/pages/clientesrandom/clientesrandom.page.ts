import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientesrandom',
  templateUrl: './clientesrandom.page.html',
  styleUrls: ['./clientesrandom.page.scss'],
})
export class ClientesRandomPage implements OnInit {

  digimones: any[] = [];  

  paginaActual = 1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`

    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = this.digimones.concat(resultado.content)
      
    });
  }

cargarSiguientePagina(){
  this.paginaActual++;
  this.ngOnInit();
}

cargarAnteriorPagina(){
  this.paginaActual--;
  this.ngOnInit();
}

//Alerta


}