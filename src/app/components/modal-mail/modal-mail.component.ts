import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ModalMailService } from '../../services/modal-mail.service';


@Component({
  selector: 'app-modal-mail',
  templateUrl: './modal-mail.component.html',
  styleUrls: ['./modal-mail.component.css']
})
export class ModalMailComponent implements OnInit {

  mailCorrecto:boolean=true;
  mostrarSalida:boolean=false;
  

  mailContactoForm=new FormGroup({
    mailContacto:new FormControl('',[Validators.required,Validators.email])
  })

  constructor(public modalMailService: ModalMailService) { 
    
  }

  ngOnInit(): void {
  }

  enviarMail(){

    if (this.mailContactoForm.get('mailContacto')?.touched && this.mailContactoForm.get('mailContacto')?.valid){
      this.modalMailService.mail=this.mailContactoForm.get('mailContacto')?.value||'';   //almaceno el mail
      const mail = this.modalMailService.mail;
      const type= this.modalMailService.typePlain;
      this.mailContactoForm.get('mailContacto')?.disable();
      this.modalMailService.mailEnviado.emit({mail,type})
      this.abrirSalida();
    }else{
      return;
    }
    
  }

  abrirSalida(){
    this.mostrarSalida=true;    
  }

  cerrarModalCancelar(){
    this.modalMailService.modalMail.emit(false);
  }

  invalidEmail():string{
    if (this.mailContactoForm.get('mailContacto')?.touched && this.mailContactoForm.get('mailContacto')?.invalid){
      this.mailCorrecto=false;
      return 'invalid';      
    }
    if (this.mailContactoForm.get('mailContacto')?.touched && this.mailContactoForm.get('mailContacto')?.valid){
      this.mailCorrecto=true;
    }
    return '';
  }
}
