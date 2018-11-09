import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-beer',
  templateUrl: './form-beer.component.html'
})
export class FormBeerComponent implements OnInit {
    imagem = "";
    tipos = [
      {nome: 'x', valor: 'x'},
      {nome: 'y', valor: 'y'},
    ];
  constructor() { }

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

}
