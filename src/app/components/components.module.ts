import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { CardComponent } from './card/card.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { FeaturesCardComponent } from './features-card/features-card.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { CardsComponent } from './cards/cards.component';
import { PipePricePipe } from './pipes/pipe-price.pipe';
import { ModalMailComponent } from './modal-mail/modal-mail.component';



@NgModule({
  declarations: [
    CardComponent,
    ImageCardComponent,
    PriceCardComponent,
    FeaturesCardComponent,
    FeatureCardComponent,
    CardsComponent,
    PipePricePipe,
    ModalMailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],exports:[
    CardsComponent,
    PipePricePipe    
  ]
})
export class ComponentsModule { }
