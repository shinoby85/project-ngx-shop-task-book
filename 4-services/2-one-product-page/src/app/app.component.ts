import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../../shared/mocks/4-services/products";
import {ProductsService} from "./services/products/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  public title = 'Компонент страницы продукта';
  public products: IProduct[] = null
  public product$: Observable<IProduct>=null
  constructor(private productService: ProductsService) {
  }
  ngOnInit() {
    this.product$=this.productService.getProductById('korpus-cougar-gemini-m-385tmb00001-seryj')
  }
}
