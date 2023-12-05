import { Injectable } from '@angular/core';
import {Camera, CameraResultType , CameraSource, Photo} from '@capacitor/camera'
import {Filesystem, Directory} from '@capacitor/filesystem'

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }
  public async addNewToGallery(){
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
  }

}
