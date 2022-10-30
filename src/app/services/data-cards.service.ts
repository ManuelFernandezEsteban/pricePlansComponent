import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Plains } from '../interfaces/cards';

@Injectable({
  providedIn: 'root'
})
export class DataCardsService {

  constructor(private http:HttpClient ) {

  }

  getDataCards(url:string){
    return this.http.get<Plains>(url);
  }
}
