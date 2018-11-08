import { Component, OnInit } from '@angular/core';
import { Beer } from './beer/beer.model';
import { BeersServices } from './beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html'
})
export class BeersComponent implements OnInit {

  beers: Beer[]

  constructor(private beersServices: BeersServices) { }

  ngOnInit() {
    this.beersServices.beer().subscribe(beers => this.beers = beers)
  }

}
