import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phones'
})
export class PhonesPipe implements PipeTransform {

  transform(value: string): string {
    const ddd = value.substring(0,2);
    const firstNumbers = value.substring(2,7);
    const lastNumbers = value.substring(7,value.length);
    return `(${ddd})${firstNumbers}-${lastNumbers}`;
  }

}
