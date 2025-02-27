import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ModalService} from "../../modal/modal.service";
import {CardConfirmComponent} from "./card-confirm/card-confirm.component";

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
    this.modalService.open({
      component: CardConfirmComponent,
      context:{
        product: {...this.product},
        save:() => {
          console.log('save')
          this.modalService.close()

        },
        close:()=>{
          this.modalService.close()
        }
      }
    })
  }
}
