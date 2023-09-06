import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() mostrarHeader: boolean = true;
  @Input() mostrarBoton: boolean = true;

  @Input() imagen!: string ;
  @Input() nombre!: string ;
  @Input() edad!: string ;
  @Input() descripcion!: string ;

  constructor(private router: Router) { }

  ngOnInit() {}

  mapa_pasajeros(){
    this.router.navigate(['mapa-pasajeros'])
  }
}
