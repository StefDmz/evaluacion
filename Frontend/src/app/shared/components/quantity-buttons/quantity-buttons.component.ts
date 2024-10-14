import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-quantity-buttons',
  templateUrl: './quantity-buttons.component.html',
  styles: ``
})
export class QuantityButtonsComponent {
  @Input() public quantity!: number;
  @Input() public smallSize!: boolean;

  @Output() public onQtyChange: EventEmitter<number> = new EventEmitter();

  public updateQtyProduct(add: boolean): void {
    if (!add) {
      if (this.quantity === 1) return;
      this.quantity--;
    } else {
      this.quantity++;
    }
    this.onQtyChange.emit(this.quantity);
  }
}
