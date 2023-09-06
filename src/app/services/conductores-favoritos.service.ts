import { Injectable } from '@angular/core';
import { Conductor_Favorito } from '../pages/conductores-favoritos/conductores-favoritos.model';

@Injectable({
  providedIn: 'root'
})
export class ConductoresFavoritosService {

  conductores_favoritos: Conductor_Favorito[] = [
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
    }
  ] 
  constructor() { }

  //Metodos Cutomer

  // Metodo que devuelve todo el modulo conductores
  getAll(){
    return[...this.conductores_favoritos]
  }

  // Metotodo para que devuelva el conductor por el id buscado
  getConductor_Favorito(id: string){
    return {
      ...this.conductores_favoritos.find(aux =>{
        return aux.id === id
      })
    }
  }
  //metodo que agrega conductor
  agregarConductor(nombre: string, imagen: string, edad: string, descripcion: string){
    this.conductores_favoritos.push({
      nombre, imagen, edad, descripcion, id: this.conductores_favoritos.length + 1 + ""
    })
  }

    //metodo que elimina al conductor

    deleteConductores(id: string){
      this.conductores_favoritos = this.conductores_favoritos.filter(aux => {
        return aux.id !== id
      })

    }

}
