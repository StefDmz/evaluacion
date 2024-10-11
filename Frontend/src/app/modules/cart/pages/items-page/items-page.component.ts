import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../../core/interfaces/cart-item.interface';
import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'cart-items-page',
  templateUrl: './items-page.component.html',
  styles: ``
})
export class ItemsPageComponent implements OnInit {
  public cartItems?: CartItem[];

  constructor(
    private readonly _cartService: CartService
  ){}

  ngOnInit(): void {
    this.cartItems = this._cartService.productsToBuy;
  }

}
