import {Component} from '@angular/core';
import {ProductsService} from "../services/products/products.service";
import {Observable} from "rxjs";
import {IProduct} from "../../../../../shared/mocks/4-services/products";

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  public products$: Observable<IProduct[]> = this.productsService.getProducts();

  constructor(private productsService: ProductsService){
  }


}
