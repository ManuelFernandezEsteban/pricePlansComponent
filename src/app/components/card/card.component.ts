import { Component, Input, OnInit } from '@angular/core';
import { Price } from '../../interfaces/price';
import { Feature } from '../../interfaces/feature';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  

  @Input() type:string='';
  price:Price={
    name:'Starter',
    price:49
  };
  light:string='';
  features:Feature[]=[];
  gap:string='gap-2'

  constructor() { }

  ngOnInit(): void {
  }

}
