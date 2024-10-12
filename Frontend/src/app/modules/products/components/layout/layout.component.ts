import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../../core/interfaces/category.interface';
import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'products-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent implements OnInit {
  @Input() public category!: Category;
  @Output() public onOpenSidebar: EventEmitter<Product> = new EventEmitter();

  public productSelected!: Product;
  public products: Product[] = [];

  constructor(
    private readonly _productsService: ProductsService
  ){}

  ngOnInit(): void {
    this._productsService.getProducts(this.category.id)
      .subscribe(items => this.products = items);
  }

  public openSidebar(product: Product): void {
    this.onOpenSidebar.emit(product);
  }
}
