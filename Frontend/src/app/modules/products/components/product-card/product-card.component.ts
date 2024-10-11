import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() public product!: Product;

  @Output() public onOpenSidebar: EventEmitter<Product> = new EventEmitter();

  public openSidebar(): void {
    this.onOpenSidebar.emit(this.product);
  }
}
