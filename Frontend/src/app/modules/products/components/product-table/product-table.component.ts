import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styles: ``
})
export class ProductTableComponent implements OnInit {
  @Output() onEditProduct: EventEmitter<Product> = new EventEmitter();

  public products: Product[] = [];
  public currentPage: number = 1;
  public pages: number = 1;

  constructor(
    private readonly _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.changePage(1);

    this._productService.getPages()
      .subscribe(pages => this.pages = pages);
  }

  public get canPrev(): boolean {
   return (this.currentPage != 1);
  }

  public get canNext(): boolean {
    return (this.currentPage != this.pages);
  }

  public changePage(page: number): void {
    this.currentPage = page;

    this._productService.getProductsByPage(this.currentPage)
      .subscribe(items => {
        this.products = items;
      });
  }

  public editProduct(item: Product): void {
    this.onEditProduct.emit(item);
  }
 
}
