import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartProduct} from "../../../../../shared/mocks/1-components/cart-product";

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input()
  public product: ICartProduct = {} as ICartProduct
  @Output()
  public increment = new EventEmitter()
  @Output()
  public decrement = new EventEmitter()

  incrementProductInCart() {
    this.increment.emit()
  }

  decrementProductInCart() {
    this.decrement.emit()
  }
}
