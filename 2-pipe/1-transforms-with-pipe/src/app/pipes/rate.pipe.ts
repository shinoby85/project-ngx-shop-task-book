import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    let intPart=Math.floor(value);
    if (value-intPart>=0.25&&value-intPart<0.75){
      return intPart+0.5;
    }
    else if(value-intPart>=0.75){
      return intPart+1;
    }
    return intPart;
  }
}
