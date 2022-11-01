import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMailService {

  constructor() { }

  modalMail=new EventEmitter<boolean>();
}
