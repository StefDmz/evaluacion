import { Component } from '@angular/core';

@Component({
  selector: 'shared-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styles: ``
})
export class AdminSidebarComponent {
  public isMenuOpen: boolean = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
