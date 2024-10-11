import { Component } from '@angular/core';
import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'cart-order-details-page',
  templateUrl: './order-details-page.component.html',
  styles: ``
})
export class OrderDetailsPageComponent {
  constructor(
    private readonly _cartService: CartService
  ){}

  public get cartSubtotal(): number {
    return this._cartService.subtotal;
  }
}
