import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFeedback, IProduct} from "../../../../../../shared/mocks/3-directives/product-information";

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent{
  @Input()
  public feedbacks: IFeedback[] = []

  @Output()
  public addFeedbackEvent: EventEmitter<string>=new EventEmitter<string>()


  public addNewFeedback() {
    this.addFeedbackEvent.emit("отзыв добавлен")
  }
}
