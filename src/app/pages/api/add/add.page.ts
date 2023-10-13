import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IConductor } from 'src/app/interfaces/iconductor';
import { ConductoresService } from 'src/app/services/api/conductores.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  //instacia creada para el test
  conductor: IConductor = {
    nombre: 'Julio',
    genero: 'Tapia'
  }



  constructor(private apiServices: ConductoresService, private router: Router) { }

  ngOnInit() {

  }
  addConductor(){
    this.apiServices.addConductores(this.conductor).subscribe()
    this.router.navigate(['/apilist']);
  }

}
