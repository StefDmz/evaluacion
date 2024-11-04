import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
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
