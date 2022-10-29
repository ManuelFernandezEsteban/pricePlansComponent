import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrice'
})
export class PipePricePipe implements PipeTransform {

  transform(value: string): string {
    return '';
  }

}
