import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConductor } from 'src/app/interfaces/iconductor';
import { ConductoresService } from 'src/app/services/api/conductores.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  
  conductor!: IConductor;
  
  constructor(
    private apiServices: ConductoresService,
    private firestore: FirestoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const conductorId = this.route.snapshot.paramMap.get('id');
    if(conductorId){
      this.getConductor(conductorId)
    }
  }
  ionViewWillEnter(){
    //this.getConductor(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/", 3)
    let id = aux[2]
    return id
  }

  getConductor(id: string){
    /*this.apiServices.getConductores(id).subscribe((resp:any) => {
      this.conductor = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        genero: resp[0].genero
      }
    })*/
    const conductorId = this.route.snapshot.paramMap.get('id');

    if(conductorId){
      this.firestore.getConductorById('conductor', conductorId).subscribe((conductor) =>{
        this.conductor = conductor || {} as IConductor;
        this.conductor.id = conductorId;
      });
    }
  }

  updateConductor(){
    this.mensaje();
  }

  mensaje(){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quierees editarlo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Editalo',
      heightAuto: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica para el caso afirmativo
        Swal.fire({
          icon: 'success',
          title: 'Conductor Editado',
          heightAuto: false,
        })
        /*this.apiServices.updateConductores(this.conductor).subscribe();*/
        const conductorId = this.route.snapshot.paramMap.get('id');
        if(conductorId){
          this.firestore.updateDocument('conductor', conductorId, this.conductor);
          this.router.navigate(['/apilist'])
        }
      }
    });
  }

}
