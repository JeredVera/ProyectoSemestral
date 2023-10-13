import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from 'src/app/services/api/conductores.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  conductor = {
    id: 0,
    nombre: 'test',
    genero: 'test'
  }



  constructor(private apiServices: ConductoresService, private router: Router) { }

  ngOnInit() {
    console.log(this.getId)
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

  updateConductor(){
    this.apiServices.updateConductores(this.conductor).subscribe();
    this.router.navigate(['/apilist'])
  }

}
