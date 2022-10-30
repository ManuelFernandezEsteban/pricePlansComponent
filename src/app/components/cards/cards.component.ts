import { Component, OnInit } from '@angular/core';
import { Plain, Plains } from 'src/app/interfaces/cards';
import { DataCardsService } from '../../services/data-cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  plains:Plain[]=[]

  constructor(dataCardsService:DataCardsService) {

    dataCardsService.getDataCards('../assets/data/cards.json')
      .subscribe((data:Plains)=>{
        //console.log(data.cards);
        this.plains=data.plains;
        //console.log(this.cards)
    });
      

    

  }

  ngOnInit(): void {
  }

}
