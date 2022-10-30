import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrice'
})
export class PipePricePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 49:
        return '49 €';       
        
        case 99:
        return '99 €';
        
        default :
        return 'Free';
        
    }
  }

}
