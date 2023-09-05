import { Injectable } from '@angular/core';
import { Pasajero } from '../pages/pasajeros/pasajeros.model';

@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  pasajeros: Pasajero[] = [
    {
      id: '1' ,
      nombre: 'Vicente' ,
      imagen: 'https://caracol.com.co/resizer/xE2xxy1zy4o2Ow8O4rzKMHnT2o4=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/JXFOEJKH7BITNDYTJXS2UQ3F2I.jpg',
      edad: '18',
      descripcion: 'Preparador Fisico',
      telefono:'+56 9 87459851',
      direccion:'Eyzaguirre 0234'
    },
    {
      id: '2' ,
      nombre: 'Fransisca' ,
      imagen: 'https://www.semana.com/resizer/NLCC7OsQwKvEAjw9ueaK23JQ5mI=/arc-anglerfish-arc2-prod-semana/public/CV2NB24T2NB3NBNFIFZT4T2HFU.jpg',
      edad: '24',
      descripcion: 'Tecnica en Enfermaria',
      telefono:'+56 9 84512635',
      direccion:'Santa Rosa 0986'
    },
    {
      id: '3' ,
      nombre: 'Felipe' ,
      imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/YM2VS27SYZFNPO3WIHLX7MYCUE.jpeg',
      edad: '20',
      descripcion: 'Analista Programador',
      telefono:'+56 9 52359420',
      direccion:'Vicuña Mackena Paradero 14'
    }
  ]
  constructor() { }

  //Metodos Cutomer

  // Metodo que devuelve todo el modulo conductores
  getAll(){
    return[...this.pasajeros]
  }

  // Metotodo para que devuelva el conductor por el id buscado
  getPasajero(id: string){
    return {
      ...this.pasajeros.find(aux =>{
        return aux.id === id
      })
    }
  }

  //metodo que agrega un pasajero
  addPasajero(nombre: string, imagen: string, edad: string, descripcion: string, telefono:string, direccion: string){
    this.pasajeros.push({
      nombre, imagen, edad, descripcion, telefono, direccion, id: this.pasajeros.length + 1 + ""
    })
  }


  //metodo que elimina un pasajero
  deletePasajero(id: string){
    this.pasajeros = this.pasajeros.filter(aux => {
      return aux.id !== id
    })
  }

}
