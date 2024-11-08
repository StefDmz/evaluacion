import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { SidebarType } from '../../core/types/sidebarType';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html'
})
export class AdministrationComponent {
  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  constructor(
    private readonly _sidebarService: SidebarService
  ){}

  public openSidebar(): void {
    this._sidebarService.openSidebar('Info');
  }
}
