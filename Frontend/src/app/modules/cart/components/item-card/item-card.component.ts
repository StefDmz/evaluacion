import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CartItem } from '../../../../core/interfaces/cart-item.interface';
import { CartService } from '../../../../core/services/cart/cart.service';

@Component({
  selector: 'cart-item-card',
  templateUrl: './item-card.component.html',
  styles: ``
})
export class ItemCardComponent {
  @Input() public item!: CartItem;
  @Input() public isLast!: boolean;

  public newNumber: number = 1;
  public edit: boolean = false;

  constructor(
    private readonly _cartService: CartService
  ) { }

  public showEditInput(): void {
    this.edit = true;
  }

  public editQuantity(): void {
    this._cartService.updateQuantity(this.item, this.newNumber);
    this.edit = false;
  }

  public deleteItem(): void {
    this._cartService.deleteProduct(this.item);
  }
}
