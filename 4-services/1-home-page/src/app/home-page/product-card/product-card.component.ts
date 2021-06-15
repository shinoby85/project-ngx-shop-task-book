import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ModalService} from "../../modal/modal.service";

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
// @ts-ignore
export class ProductCardComponent {
  @Input()
  // @ts-ignore
  public product!: IProduct = null;

  @Output()
  // @ts-ignore
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }



  constructor(private readonly modalService:ModalService) {
  }

  addToCard():void {
    this.modalService.open(this.product)
  }
}
