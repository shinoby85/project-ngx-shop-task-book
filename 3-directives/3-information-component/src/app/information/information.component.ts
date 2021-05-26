import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../../../../../shared/mocks/3-directives/product-information";

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input()
  public product:IProduct=null;

  @Output()
  public addToCart: EventEmitter<any>=new EventEmitter<any>()

  public isShow:boolean=false




  show(flag:boolean) {
    this.isShow=flag
  }

  addToBasket() {
    this.addToCart.emit()
  }
}
