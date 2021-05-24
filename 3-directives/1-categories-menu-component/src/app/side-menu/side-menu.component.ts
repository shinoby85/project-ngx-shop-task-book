import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from "../../../../../shared/mocks/3-directives/categories";


@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Input()
  public categories: ICategory[] = []

  @Output()
  public categoryChange: EventEmitter<string> = new EventEmitter()

  public currentName: string | null = null

  hover(category: string = null) {
    this.currentName = category
  }

  mouseLeave() {
    this.currentName = null
  }

  redirectTo(category) {
    this.categoryChange.emit(category)
  }




}
