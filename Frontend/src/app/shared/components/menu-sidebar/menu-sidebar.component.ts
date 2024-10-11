import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../../../core/interfaces/category.interface';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'shared-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styles: ``
})
export class MenuSidebarComponent implements OnInit {
  @Output() public onShowCart: EventEmitter<void> = new EventEmitter();
  @Output() public onShowSchedule: EventEmitter<void> = new EventEmitter();
  @Output() public onCategorySelect: EventEmitter<Category> = new EventEmitter();

  public categories: Category[] = [];
  public categorySelected?: Category;

  constructor(
    private readonly _categoriesService: CategoriesService,
    private readonly _cartService: CartService
  ){}

  ngOnInit(): void {
    this._categoriesService.getCategories()
      .subscribe(items => this.categories = items);
  }

  public get numberCartItems(): number {
    return this._cartService.numberProducts;
  }

  public get cartSubtotal(): number {
    return this._cartService.subtotal;
  }

  public showCart(): void {
    this.onShowCart.emit();
  }

  public showSchedule(): void {
    this.onShowSchedule.emit();
  }

  public selectCategory(category: Category): void {
    this.categorySelected = category;
    this.onCategorySelect.emit(category);
  }
}
