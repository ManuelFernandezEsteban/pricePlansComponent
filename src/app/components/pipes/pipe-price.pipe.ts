import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrice'
})
export class PipePricePipe implements PipeTransform {

  transform(value: number): string {

    if (value===0){
      return 'Free';
    }else{
      return `${value} €`
    }

  }

}
