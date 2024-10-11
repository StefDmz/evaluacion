import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {
  public formPage: number = 1;

  constructor(
    private readonly _sidebarService: SidebarService
  ){}

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public nextPage(): void {
    this.formPage++;
  }

  public previousPage(): void {
    this.formPage--;
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
