import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../../core/services/cart/cart.service';
import { Order } from '../../../../core/interfaces/order.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cart-order-details-page',
  templateUrl: './order-details-page.component.html',
  styles: ``
})
export class OrderDetailsPageComponent {
  @Input() public order!: Order;
  
  @Output() onChangePage: EventEmitter<boolean> = new EventEmitter();
  @Output() onFinishOrder: EventEmitter<void> = new EventEmitter();

  public tipSelected: number = 0;
  public tipArray: number[] = [0, 10, 20, 30, 40, 50];

  public form: FormGroup = new FormGroup({
    paymentMethod: new FormControl('', [Validators.required]),
    paidWith: new FormControl(),
    comentaries: new FormControl()
  });

  constructor(
    private readonly _cartService: CartService
  ){}

  public get cartSubtotal(): number {
    return this._cartService.subtotal;
  }

  public selectTip(tip: number): void { 
    this.tipSelected = tip;
  }

  public changePage(nextPage: boolean){
    if(nextPage){
      if(this.form.invalid){
        return;
      }
      this.order.paymentMethod = this.form.get('paymentMethod')?.value;
      this.order.comentaries = this.form.get('comentaries')?.value;
      this.order.tips = this.tipSelected;
      this.order.discountId = '';
      this.order.orderDate = new Date();

      if(this.order.paymentMethod == 'efectivo'){
        this.order.paidWith = this.form.get('paidWith')?.value;
      }

      this.onFinishOrder.emit();
    }
    this.onChangePage.emit(nextPage);
  }
}
