import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../services/products/products.service";
import {Observable} from "rxjs";
import {IProduct} from "../../../../../shared/mocks/4-services/products";
import {CategoriesService} from "../services/categories/category.service";
import {ICategory} from "../../../../../shared/mocks/4-services/categories";

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  @Input()
  public products: IProduct[] = null;
  @Input()
  public categories: ICategory[] = null


  goToBasket() {

  }

  goToProduct() {

  }

  redirectTo() {

  }
}
