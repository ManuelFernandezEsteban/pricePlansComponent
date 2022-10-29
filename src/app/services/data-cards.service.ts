import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Card, Cards } from '../interfaces/cards';

@Injectable({
  providedIn: 'root'
})
export class DataCardsService {

  constructor(private http:HttpClient ) {

  }

  getDataCards(url:string){
    return this.http.get<Cards>(url);
  }
}
