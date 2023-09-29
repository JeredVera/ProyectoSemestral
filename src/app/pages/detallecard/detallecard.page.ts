import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallecard',
  templateUrl: './detallecard.page.html',
  styleUrls: ['./detallecard.page.scss'],
})
export class DetallecardPage implements OnInit {

  rickandmorty : any;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.httpClient.get<any>("https://rickandmortyapi.com/api/character/"+id).subscribe(resultado => {
      //console.log(resultado)
      this.rickandmorty = resultado;
    });
  }

}
