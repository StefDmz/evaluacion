import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../../core/services/cart/cart.service';
import { Order } from '../../../../core/interfaces/order.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cart-order-details-page',
  templateUrl: './order-details-page.component.html',
  styles: ``
})
export class OrderDetailsPageComponent {
  @Input() public order!: Order;
  
  @Output() onChangePage: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishOrder: EventEmitter<Order> = new EventEmitter();

  public form: FormGroup = new FormGroup({
    paymentMethod: new FormControl(),
    comentaries: new FormControl()
  });

  constructor(
    private readonly _cartService: CartService
  ){}

  public get cartSubtotal(): number {
    return this._cartService.subtotal;
  }

  public changePage(nextPage: boolean){
    if(nextPage){
      if(this.form.invalid){
        return;
      }
      this.order.paymentMethod = this.form.get('paymentMethod')?.value;
      this.order.comentaries = this.form.get('comentaries')?.value;
      this.order.tips = 0;
      this.order.discountId = '';
      this.order.orderDate = new Date();
      this.onFinishOrder.emit(this.order);
    }
    this.onChangePage.emit(nextPage);
  }
}
