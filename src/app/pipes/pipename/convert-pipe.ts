import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(amount: number, rate: number, currency: string): number {
    if(currency === 'INR'){
      return amount / rate;
    }
    else if(currency === 'USD'){
      return amount * rate;
    }
    else{
      return 0;
    }


  }
}
