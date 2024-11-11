import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarItem } from '../../../core/interfaces/sidebar-item.interface';
import { LoginService } from '../../../core/services/login/login.service';

@Component({
  selector: 'shared-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styles: ``
})
export class AdminSidebarComponent {
  @Output() onInformationSidebar: EventEmitter<void> = new EventEmitter();

  public isMenuOpen: boolean = false;

  public options: SidebarItem[] = [
    { name: 'Productos', route: 'admin/products', icon: 'fa-solid fa-drumstick-bite' },
    { name: 'Categorías', route: 'admin/categories', icon: 'fa-solid fa-list' },
    { name: 'Horarios', route: 'admin/schedules', icon: 'fa-solid fa-clock' }
  ];

  constructor(
    private readonly _loginService: LoginService
  ){ }

  public get isAuthenticated(): boolean {
    return this._loginService.isAuthenticated;
  }
  
  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public informationSidebar(): void {
    this.onInformationSidebar.emit();
  }

  public logout(): void {
    this._loginService.logout();
  }
}
