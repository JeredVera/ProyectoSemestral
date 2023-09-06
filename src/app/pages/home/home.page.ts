import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}
  

  ngOnInit() {
  }
  
  conductores(){
    this.router.navigate(['conductores'])
  }

  home_conductores(){
    this.router.navigate(['home-conductores'])
  }

  codigo_qr(){
    this.router.navigate(['codigo-qr'])
  }
}
