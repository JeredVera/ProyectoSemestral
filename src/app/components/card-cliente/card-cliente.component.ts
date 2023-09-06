import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss'],
})
export class CardClienteComponent  implements OnInit {

  @Input() mostrarHeader: boolean = true;
  @Input() mostrarBoton: boolean = true;
  
  @Input() imagen!: string;
  @Input() nombre!: string;
  @Input() direccion!: string;
  @Input() edad!: string;
  @Input() descripcion!: string;
  @Input() telefono!: string;
  constructor() { }

  ngOnInit() {}

}
