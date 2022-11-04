import { Component,  OnInit } from '@angular/core';
import { Plain, Plains } from 'src/app/interfaces/cards';
import { DataCardsService } from '../../services/data-cards.service';
import { ModalMailService } from '../../services/modal-mail.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  

  dataCard:DataCardsService;
  mailModal:ModalMailService;
  pedirMail:boolean=false;

  plains:Plain[]=[]

  constructor(dataCardsService:DataCardsService, modalService : ModalMailService) {

    this.dataCard = dataCardsService;
    this.mailModal=modalService;   

  }

  ngOnInit(): void {   
    this.dataCard.getDataCards('../assets/data/cards.json')
      .subscribe((data:Plains)=>{
        //console.log(data.cards);
        this.plains=data.plains;
        //console.log(this.cards)
    });
      
    this.mailModal.modalMail.subscribe(resp=>{
      this.pedirMail=resp;
    })

    this.mailModal.mailEnviado.subscribe(resp=>{
      console.log(resp);//obtenemos la respuesta del modal
    })
  }
  mostrarModal(event: any){
    this.pedirMail=event
  }
}
