import { Component, Input, OnInit } from '@angular/core';
import { Price } from 'src/app/interfaces/price';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  @Input() price:Price={name:'',price:0};
  @Input() light:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
