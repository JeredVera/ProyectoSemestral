import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductoresService } from 'src/app/services/api/conductores.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaConductores:any = [];
  
  constructor(private router: Router, private conductoresApi: ConductoresService) { }

  ngOnInit() {
    this.conductoresApi.listConductores().subscribe((resp) =>{
      //console.log(resp)
      this.listaConductores = resp
    })
  }

  listar(){

  }

  buscarConductor(event: any) {
    this.router.navigate(['/agregar'])
  }

  conductores_favoritos(){
    this.router.navigate(['conductores-favoritos'])
  }
}
