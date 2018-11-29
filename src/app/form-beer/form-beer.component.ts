import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BEERS_API } from '../app.api';
import { Beer } from './beer-model-form';

@Component({
  selector: 'app-form-beer',
  templateUrl: './form-beer.component.html'
})
export class FormBeerComponent implements OnInit {
    imagem = "";
    tipos = [
      {nome: 'Lager', valor: 'Lager'},
      {nome: 'Pilsen', valor: 'Pilsen'},
      {nome: 'Bock', valor: 'Bock'},
      {nome: 'Ale', valor: 'Ale'},
    ];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  uploadImg($event) {
    //console.log($event);
    const file = $event.target.files[0];
    const fileReader = new FileReader();
    let test;
    fileReader.onloadend = () => {
      test = fileReader.result;
      this.imagem = test;
      
    };

    fileReader.readAsDataURL(file);
    
    console.log(this.imagem);
  }

  onCadastro(){
    this.httpClient.post(`${BEERS_API}`,<Beer[]>).subscribe
  }

}
