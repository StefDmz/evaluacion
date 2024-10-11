import { Component } from '@angular/core';
import { SidebarService } from './core/services/sidebar/sidebar.service';
import { SidebarType } from './core/types/sidebarType';
import { ModalService } from './core/services/modal/modal.service';
import { Category } from './core/interfaces/category.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public categorySelected?: Category;

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _modalService: ModalService
  ){}

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public get isModalOpen(): boolean {
    return this._modalService.isOpen;
  }

  public openSidebar(sidebarType: SidebarType): void {
    this._sidebarService.openSidebar(sidebarType);
  }

  public openModal(): void {
    this._modalService.openModal();
  }

  public categorySelect(category: Category): void {
    this.categorySelected = category;
  }
}
