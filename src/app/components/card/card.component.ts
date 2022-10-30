import { Component, Input, OnInit } from '@angular/core';
import { Price } from '../../interfaces/price';
import { Feature, Plain } from '../../interfaces/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
  gap:string='gap-2'

  constructor() { 
   
  }

  ngOnInit(): void {
    this.price={name:this.plain.type,price:this.plain.price};
    this.features=this.plain.features;
    if (this.plain.type==='Pro'){
      this.light='';
    }else{
      this.light='light';
    }    
  }

}
