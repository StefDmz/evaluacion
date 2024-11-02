import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/interfaces/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';
import { Page } from '../../../../core/interfaces/page.interface';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styles: ``
})
export class ProductTableComponent implements OnInit {
  public currentPage: number = 1;
  
  private _productPage!: Page;

  constructor(
    private readonly _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.changePage(1);
  }

  public get lastPage(): number {
    return this._productPage.last;
  }

  public get canPrev(): boolean {
    return this._productPage.prev != null;
  }

  public get canNext(): boolean {
    return this._productPage.next != null;
  }

  public get pages(): number {
    return this._productPage.pages;
  }

  public get products(): Product[] {
    return this._productPage.data;
  }

  public changePage(page: number): void {
    this.currentPage = page;

    this._productService.getProductByPage(this.currentPage)
      .subscribe(item => {
        this._productPage = item
      });
  }
}
