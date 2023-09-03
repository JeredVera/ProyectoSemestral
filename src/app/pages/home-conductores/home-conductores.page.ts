import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-conductores',
  templateUrl: './home-conductores.page.html',
  styleUrls: ['./home-conductores.page.scss'],
})
export class HomeConductoresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  

  pasajeros() {
    this.router.navigate(['pasajeros']);
  }

}
