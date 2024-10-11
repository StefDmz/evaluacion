import { Component } from '@angular/core';
import { SidebarService } from './core/services/sidebar/sidebar.service';
import { SidebarType } from './core/types/sidebarType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private readonly _sidebarService: SidebarService
  ){}

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public openSidebar(sidebarType: SidebarType): void {
    this._sidebarService.openSidebar(sidebarType);
  }
}
