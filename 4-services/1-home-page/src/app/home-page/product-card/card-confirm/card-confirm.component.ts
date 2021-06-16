import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../../../../../shared/mocks/4-services/products";

@Component({
  selector: 'app-card-confirm',
  templateUrl: './card-confirm.component.html',
  styleUrls: ['./card-confirm.component.sass']
})
export class CardConfirmComponent {

  @Input()
  public product!: IProduct
  save!:()=>{}
  close!:()=>{}


}
