import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

  check: boolean = false ;

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.swipeGesture(false);
  }
  
  ionViewWillLeave() {
    this.menu.swipeGesture(true);
  }

  login() {
    if(this.check === true){
      this.router.navigate(['login'])
    } else {
      this.mensaje();
    }
  }

  mensaje(){
    Swal.fire({
      icon: 'error',
      title: 'Debe aceptar los terminos para continuar',
      heightAuto: false,
    })
  }
}
