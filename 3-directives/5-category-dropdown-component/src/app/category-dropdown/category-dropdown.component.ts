import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from "../../../../../shared/mocks/3-directives/categories";

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Input()
  public categories: ICategory[] = []

  @Output()
  public subCategorySelectEvent: EventEmitter<string> = new EventEmitter<string>()

  public currentIndex: number | null = null
  public currentCategory = ""


  public subCategorySelect(subCat: string) {
    this.subCategorySelectEvent.emit(`Переход на категорию товара: ${subCat}`)
  }

  showSubCategories(ind) {
    this.currentIndex = ind
  }

  setSubCategory(_id: string) {
    this.currentCategory=_id;
  }

  moveSubCategory() {
    this.currentCategory=""
  }
}
