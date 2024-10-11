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

  @ViewChild('txtQuantity') txtQuantity!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly _cartService: CartService
  ){}

  public edit: boolean = false;

  public showEditInput(): void {
    this.edit = true;
  }
  
  public editQuantity(): void {
    const newNumber =  parseInt(this.txtQuantity.nativeElement.value);
    this._cartService.updateQuantity(this.item, newNumber);
    setTimeout(() => {
      this.edit = false;
    }, 1000);
  }

  public deleteItem(): void { 
    this._cartService.deleteProduct(this.item);
  }
}
