import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    debugger
    if (!countOfReviews){
      return 'Нет отзывов'
    }
    else if (countOfReviews%100>=11 && countOfReviews%100<=14){
      return `${countOfReviews} отзывов`;
    }
    else if (countOfReviews%10>=2 && countOfReviews%10<=4){
      return `${countOfReviews} отзыва`;
    }
    else if (countOfReviews%10===1){
      return `${countOfReviews} отзыв`;
    }
    return `${countOfReviews} отзывов`;
  }
}
