import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

  check: boolean = false ;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.check === true){
      this.router.navigate(['login'])
    } else {
      console.log('Debe Aceptar Terminos Para Iniciar Sesion')
    }
  }
}
