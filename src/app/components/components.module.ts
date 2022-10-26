import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';



@NgModule({
  declarations: [
    CardComponent,
    ImageCardComponent,
    PriceCardComponent,
    FeaturesCardComponent,
    FeatureCardComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    CardComponent
  ]
})
export class ComponentsModule { }
