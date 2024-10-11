import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styles: ``
})
export class ProductSidebarComponent {
  constructor(
    private readonly _sidebarService: SidebarService
  ){}

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
