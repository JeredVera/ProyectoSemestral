import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from 'src/app/services/api/conductores.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private apiServices: ConductoresService, private router: Router) { }

  conductor = {
    id: 0,
    nombre: 'test',
    genero: 'test'
  }

  ngOnInit() {
    this.getConductor(this.getId())
  }

  ionViewWillEnter(){
    this.getConductor(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/", 3)
    let id = parseInt(aux[2])
    return id
  }

  getConductor(id: Number){
    this.apiServices.getConductores(id).subscribe((resp:any) => {
      this.conductor = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        genero: resp[0].genero
      }
    })
  }
  deleteConductor(){
    this.apiServices.deleteConductores(this.conductor).subscribe();
    this.router.navigate(['/apilist']);
  }
  
}