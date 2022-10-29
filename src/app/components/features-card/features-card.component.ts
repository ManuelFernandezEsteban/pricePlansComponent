import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/cards';


@Component({
  selector: 'app-features-card',
  templateUrl: './features-card.component.html',
  styleUrls: ['./features-card.component.css']
})
export class FeaturesCardComponent implements OnInit {

  @Input() features:Feature[]=[];
  @Input() gap:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
