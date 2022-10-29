import { Component, OnInit } from '@angular/core';
import { Card, Cards } from 'src/app/interfaces/cards';
import { DataCardsService } from '../../services/data-cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  cards:Card[]=[]

  constructor(dataCardsService:DataCardsService) {

    dataCardsService.getDataCards('../assets/data/cards.json')
      .subscribe((data:Cards)=>{
        //console.log(data.cards);
        this.cards=data.cards;
        //console.log(this.cards)
    });
      

    

  }

  ngOnInit(): void {
  }

}
