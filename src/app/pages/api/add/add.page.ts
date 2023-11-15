import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IConductor } from 'src/app/interfaces/iconductor';
import { ConductoresService } from 'src/app/services/api/conductores.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  //instacia creada para el test
  conductor: IConductor = {
    nombre: 'Julio',
    genero: 'Tapia'
  }



  constructor(
    /*private apiServices: ConductoresService*/  
    private firestore: FirestoreService, 
    private router: Router
  ) { }

  ngOnInit() {

  }

  addConductor(){  
    /*this.apiServices.addConductores(this.conductor).subscribe()*/
    this.firestore.createDocument('conductor', this.conductor);
    this.router.navigate(['/apilist']);  
    this.MensajeToast();
  }

  MensajeToast(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Conductor Agregado'
    })
  }
}
