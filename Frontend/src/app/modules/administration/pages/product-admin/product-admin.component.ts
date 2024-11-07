import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { SidebarType } from '../../../../core/types/sidebarType';
import { Product } from '../../../../core/interfaces/product.interface';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styles: ``
})
export class ProductAdminComponent {
  public productSelected?: Product;

  constructor(
    private readonly _sidebarService: SidebarService
  ) { }

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public editProduct(item: Product): void {
    this.productSelected = item;
    this.openSidebar('Edit');
  }

  public openSidebar(type: SidebarType): void {
    this._sidebarService.openSidebar(type);
  }
}
