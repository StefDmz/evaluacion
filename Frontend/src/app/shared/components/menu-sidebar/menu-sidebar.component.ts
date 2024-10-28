import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../core/interfaces/category.interface';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'shared-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styles: ``
})
export class MenuSidebarComponent {
  @Output() public onShowCart: EventEmitter<void> = new EventEmitter();
  @Output() public onShowSchedule: EventEmitter<void> = new EventEmitter();

  @Input() public categories: Category[] = [];

  public isMenuOpen: boolean = false;

  constructor(
    private readonly _cartService: CartService
  ) { }

  public get numberCartItems(): number {
    return this._cartService.numberProducts;
  }

  public get cartSubtotal(): number {
    return this._cartService.subtotal;
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public showCart(): void {
    this.onShowCart.emit();
  }

  public showSchedule(): void {
    this.onShowSchedule.emit();
  }
}
