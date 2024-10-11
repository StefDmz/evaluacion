import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../../../core/interfaces/category.interface';
import { CategoriesService } from '../../../core/services/categories/categories.service';

@Component({
  selector: 'shared-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styles: ``
})
export class MenuSidebarComponent implements OnInit {
  @Output() public onShowCart: EventEmitter<void> = new EventEmitter();
  @Output() public onShowSchedule: EventEmitter<void> = new EventEmitter();

  public categories: Category[] = [];

  constructor(
    private readonly _categoriesService: CategoriesService
  ){}

  ngOnInit(): void {
    this._categoriesService.getCategories()
      .subscribe(items => this.categories = items);
      console.log(this.categories);
  }

  public showCart(): void {
    this.onShowCart.emit();
  }

  public showSchedule(): void {
    this.onShowSchedule.emit();
  }
}
