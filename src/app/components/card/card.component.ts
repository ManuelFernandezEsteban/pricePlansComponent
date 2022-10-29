import { Component, Input, OnInit } from '@angular/core';
import { Price } from '../../interfaces/price';
import { Feature, Card } from '../../interfaces/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card:Card={
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
  gap:string='gap-2'

  constructor() { 
   
  }

  ngOnInit(): void {
    this.price={name:this.card.type,price:this.card.price};
    this.features=this.card.features;
    if (this.card.type==='Pro'){
      this.light='';
    }else{
      this.light='light';
    }    
  }

}
