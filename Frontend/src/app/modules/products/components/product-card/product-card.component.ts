import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Output() public onAddProduct: EventEmitter<void> = new EventEmitter();

  public addProduct(): void {
    this.onAddProduct.emit();
  }
}
