import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Beer } from "./beer/beer.model";
import { Observable } from 'rxjs';
import { BEERS_API } from '../app.api';
import 'rxjs/add/operator/map.js';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeersServices {
        
    constructor(private httpClient: HttpClient){}

    beer(): Observable<Beer[]>{
       return this.httpClient.get<Beer[]>(`${BEERS_API}`);
    }
}