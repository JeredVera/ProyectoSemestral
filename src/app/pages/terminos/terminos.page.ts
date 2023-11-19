import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {
  langs: string[] = [];
  idioma!: string;
  check: boolean = false ;

  constructor(private router: Router, private menu: MenuController, private transService: TranslateService) { 
    this.langs = this.transService.getLangs();
  }

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
  changeLangs(event:any){
    this.transService.use(event.detail.value);
  }
}
