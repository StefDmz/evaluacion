import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { SidebarType } from '../../core/types/sidebarType';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { Category } from '../../core/interfaces/category.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() public categorySelected?: Category;

  public productSelected!: Product;

  public products: Product[] = [];

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['categorySelected'] && this.categorySelected){
      this.getProducts();
    }
  }

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public openSidebar(sidebarType: SidebarType, product:Product): void {
    this._sidebarService.openSidebar(sidebarType);
    this.productSelected = product;
  }

  public getProducts(): void {
    let categoryId;
    if(this.categorySelected){
      categoryId = this.categorySelected.id;
    }
    this._productsService.getProducts(categoryId)
      .subscribe(items => this.products = items);
  }
}
