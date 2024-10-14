import { Component, Input } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { Product } from '../../../../core/interfaces/product.interface';
import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styles: ``
})
export class ProductSidebarComponent {
  @Input() public product!: Product;
  public qtyProduct: number = 1;

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _cartService: CartService
  ){}

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }

  public addProduct(): void {
    const newItem = {
      product: this.product,
      quantity: this.qtyProduct
    };

    this._cartService.addProduct(newItem);
    this.closeSidebar();
  }

}
