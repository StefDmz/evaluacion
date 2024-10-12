import { Component, Input } from '@angular/core';
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
export class ProductsComponent {
  @Input() public categories: Category[] = [];
  public productSelected!: Product;

  constructor(
    private readonly _sidebarService: SidebarService
  ){}

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public openSidebar(product: Product): void {
    this._sidebarService.openSidebar('Product');
    this.productSelected = product;
  }

}
