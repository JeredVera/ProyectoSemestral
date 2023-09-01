import { Injectable } from '@angular/core';
import { Conductor } from '../pages/conductores/conductores.model';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  conductores: Conductor[] = [
    {
      id: '1' ,
      nombre: 'Juan' ,
      imagen: 'https://pbs.twimg.com/media/ERpKCF5WsAESUA-.jpg' ,
      edad: '20' ,
      descripcion: 'Ingenieria Informatica, Horario Diurno, Destino Bajos de Mena' ,
    },
    {
      id: '2' ,
      nombre: 'Pedro' ,
      imagen: 'https://i.pinimg.com/236x/a8/23/d8/a823d8278c7acdad1a03457070933460.jpg' ,
      edad: '24' ,
      descripcion: 'Tecnico en enfermeria, Horario Vespertino, Destino Casas Viejas' ,
    },
    {
      id: '3' ,
      nombre: 'Diego' ,
      imagen: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80' ,
      edad: '19' ,
      descripcion: 'Ingeniero en Contruccion, Horario Vespertino, Destino La Florida' ,
    }
  ]
  constructor() { }

  //Metodos Cutomer

  // Metodo que devuelve todo el modulo conductores
  getAll(){
    return[...this.conductores]
  }

  // Metotodo para que devuelva el conductor por el id buscado
  getConductor(id: string){
    return {
      ...this.conductores.find(aux =>{
        return aux.id === id
      })
    }
  }
}
