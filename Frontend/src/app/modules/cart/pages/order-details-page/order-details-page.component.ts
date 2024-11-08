import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../../core/services/cart/cart.service';
import { Order } from '../../../../core/interfaces/order.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralInformation } from '../../../../core/interfaces/general-information.interface';
import { GeneralInformationService } from '../../../../core/services/general-information/general-information.service';


@Component({
  selector: 'cart-order-details-page',
  templateUrl: './order-details-page.component.html',
  styles: ``
})
export class OrderDetailsPageComponent {
  @Input() public order!: Order;
  
  @Output() public onChangePage: EventEmitter<boolean> = new EventEmitter();
  @Output() public onFinishOrder: EventEmitter<void> = new EventEmitter();

  public tipSelected: number = 0;
  public tipArray: number[] = [0, 10, 20, 30, 40, 50];
  public information!: GeneralInformation;

  public form: FormGroup = new FormGroup({
    paymentMethod: new FormControl('', [Validators.required]),
    paidWith: new FormControl(0),
    comentaries: new FormControl('', [Validators.maxLength(250)])
  });

  constructor(
    private readonly _cartService: CartService,
    private readonly _generalInfoService: GeneralInformationService
  ){
    this.form.get("paymentMethod")?.valueChanges
      .subscribe(value => {
        this.paymentMethodChange(value)
      });
  }

  public get cartSubtotal(): number {
    return this._cartService.subtotal;
  }

  private paymentMethodChange(paymentMethod: string): void {
    const paidWhitControl = this.form.get('paidWith');
    if(paymentMethod == 'efectivo'){
      paidWhitControl?.setValue(this.cartSubtotal + this.tipSelected);
      paidWhitControl?.addValidators([Validators.required, Validators.pattern('^([0-9])*$'), Validators.min(this.cartSubtotal + this.tipSelected)]);
    } else {
      paidWhitControl?.clearValidators();

      if(!this.information){
        this._generalInfoService.getInformation()
          .subscribe(item => this.information = item);
      }
    }
    paidWhitControl?.updateValueAndValidity();
  }

  public selectTip(tip: number): void { 
    this.tipSelected = tip;
  }

  public copyClabe(): void {
    navigator.clipboard.writeText(this.information.clabe);
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
