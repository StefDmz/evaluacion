import { Component } from '@angular/core';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { SidebarType } from '../../../../core/types/sidebarType';
import { Category } from '../../../../core/interfaces/category.interface';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styles: ``
})
export class CategoryAdminComponent {
  public categorySelected?: Category;
  
  constructor(
    private readonly _sidebarService: SidebarService
  ) { }

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public editCategory(item: Category): void {
    this.categorySelected = item;
    this.openSidebar('Edit');
  }

  public openSidebar(type: SidebarType): void {
    this._sidebarService.openSidebar(type);
  }
}
