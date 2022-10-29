import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/cards';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input() feature:Feature={
    feature: '',
    isEnabled: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
