import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-extranos',
  templateUrl: './clientes-extranos.page.html',
  styleUrls: ['./clientes-extranos.page.scss'],
})
export class ClientesExtranosPage implements OnInit {

  rickandmorty: any[] = [];  

  paginaActual = 1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   this.cargarData();
  }
cargarData(){
   const url = `https://rickandmortyapi.com/api/character?page=${this.paginaActual}`

    this.httpClient.get<any>(url).subscribe(resultado => {
      this.rickandmorty = this.rickandmorty.concat(resultado.results)
      console.log(this.rickandmorty)
    });
}
cargarSiguientePagina(){
  this.paginaActual++;
  this.cargarData();
}

cargarAnteriorPagina(){
  this.paginaActual--;
  this.cargarData();
}

//Alerta


}