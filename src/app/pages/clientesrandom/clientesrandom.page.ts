import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientesrandom',
  templateUrl: './clientesrandom.page.html',
  styleUrls: ['./clientesrandom.page.scss'],
})
export class ClientesrandomPage implements OnInit {

  digimones: any[] = [];  

  paginaActual = 1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   this.cargarData();
  }
cargarData(){
   const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`

    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = this.digimones.concat(resultado.results)
      console.log(this.digimones)
    });
}
  cargarSiguientePagina(){
    this.paginaActual++;
    this.cargarData();
  }
//Alerta
}
