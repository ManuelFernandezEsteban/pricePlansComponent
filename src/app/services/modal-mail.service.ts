import { Injectable,EventEmitter } from '@angular/core';
import { MailPlain } from '../interfaces/cards';

@Injectable({
  providedIn: 'root'
})
export class ModalMailService {

  public mail:string=''; // aqui almaceno el mail del usuario
  public typePlain:string=''; // aqui el tipo de suscripción

  constructor() { }

  modalMail=new EventEmitter<boolean>();
  mailEnviado=new EventEmitter<MailPlain>();

  /*
    todo: realizar un EventEmitter para comunicar el mail y el tipo de suscripcion
    cuando se introduzca un emailcorrecto y se pulse enviar en el modal.
    mailEnviado=new EventEmitter<{mail,typePlain}>();

  */
}
