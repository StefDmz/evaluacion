import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {
  public formPage: number = 1;

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _cartService: CartService
  ){}

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public get numberCartItems(): number {
    return this._cartService.numberProducts;
  }

  public changePage(next: boolean): void {
    if(next){
      this.formPage++;
      return;
    }
    this.formPage--;
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
