import { Component, createNgModule, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent implements OnInit {
  @Input() public product!: Product;

  @Output() public onSelectedProduct: EventEmitter<Product> = new EventEmitter();

  public productName: string = '';
  public productDescription: string = '';

  ngOnInit(): void {
    this.cutText(15, 50);
  }

  //Event to know Window Width size
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.updateTextLength(event.target.innerWidth);
  };

  private updateTextLength(width: number): void {
    if(width < 1280){
      this.cutText(11, 35);
    } else if(width < 1536){
      this.cutText(15, 50);
    } 
  }

  private cutText(nameLength: number, descriptionLength: number): void {
    this.productName = this.product.name.length <= nameLength ? 
    this.product.name : 
    this.product.name.trim().slice(0, nameLength).trim() + '...';

    this.productDescription = this.product.description.length <= descriptionLength ? 
      this.product.description :
      this.product.description.trim().slice(0, descriptionLength).trim() + '...';
  }

  public get canBuy(): boolean {
    return (this.product.available && this.product.stock > 0);
  }

  public selectedProduct(): void {
    if(!this.canBuy) return;
    
    this.onSelectedProduct.emit(this.product);
  }

}
