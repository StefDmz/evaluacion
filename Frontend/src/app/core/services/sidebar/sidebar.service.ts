import { Injectable } from '@angular/core';
import { SidebarType } from '../../types/sidebarType';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _sidebarType: SidebarType = '';
  private _isOpen: boolean = false;

  public get sidebarType(): SidebarType {
    return this._sidebarType;
  }

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public openSidebar(sidebarType: SidebarType): void {
    this._isOpen = true;
    this._sidebarType = sidebarType;
  }

  public closeSidebar(): void {
    this._isOpen = false;
    setTimeout(() => {
      this._sidebarType = '';
    }, 1000);
  }
}
