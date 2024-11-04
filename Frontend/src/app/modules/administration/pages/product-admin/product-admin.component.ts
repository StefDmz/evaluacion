import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { SidebarType } from '../../../../core/types/sidebarType';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styles: ``
})
export class ProductAdminComponent {
  constructor(
    private readonly _sidebarService: SidebarService
  ) { }

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public openSidebar(type: SidebarType): void {
    this._sidebarService.openSidebar(type);
  }
}
