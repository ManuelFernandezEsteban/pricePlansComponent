import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Price } from '../../interfaces/price';
import { Feature, Plain } from '../../interfaces/cards';
import { ModalMailService } from '../../services/modal-mail.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() pedirEmailModal = new EventEmitter<boolean>();

  @Input() plain:Plain={
    type: '', 
    price: 0, 
    features: [],
    image: ''
  };

  price:Price={
    name: '',
    price: 0
  };
  
  light:string='';
  features:Feature[]=[];
  gap:string=''
  colorIcon:string='';
  typeBoton:string='';

  constructor(public modalMailService:ModalMailService) { 
   
  }

  ngOnInit(): void {
    this.price={name:this.plain.type,price:this.plain.price};
    this.features=this.plain.features;
    if (this.plain.type==='Pro'){
      this.light='';
      this.gap='gap-1';
      this.colorIcon='white';
      this.typeBoton='btn-pro';
    }else if (this.plain.type==='Teams'){
      this.gap='gap-2';
      this.light='light';
      this.typeBoton='btn-team';
    }else{
      this.gap='gap-1';
      this.light='light';
      this.typeBoton='btn-free'
    }  

  }

  pedirMail(typePlain:string){
    this.modalMailService.typePlain=typePlain; //guardo el tipo de suscripción
    this.pedirEmailModal.emit(true);
    
  }

}
