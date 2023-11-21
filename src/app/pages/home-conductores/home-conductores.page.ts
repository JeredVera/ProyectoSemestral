import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService} from '@ngx-translate/core';
import { AuthService } from 'src/app/services/firebase/auth.service';

@Component({
  selector: 'app-home-conductores',
  templateUrl: './home-conductores.page.html',
  styleUrls: ['./home-conductores.page.scss'],
})
export class HomeConductoresPage implements OnInit {
  langs: string[] = [];

  constructor(private router: Router,private transService: TranslateService ,private AuthService: AuthService) {     this.langs = this.transService.getLangs();
  }

  ngOnInit() {
  }
  
  logout(){
    this.AuthService.logout();
    this.router.navigate(['login']);
  }

  pasajeros() {
    this.router.navigate(['pasajeros']);
  }

}
