import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  confirmar_qr() {
    this.router.navigate(['confirmar-qr']);
  }

}
