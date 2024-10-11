import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styles: ``
})
export class MenuSidebarComponent {
  @Output() public onShowCart: EventEmitter<void> = new EventEmitter();

  @Output() public onShowSchedule: EventEmitter<void> = new EventEmitter();

  public showCart(): void {
    this.onShowCart.emit();
  }

  public showSchedule(): void {
    this.onShowSchedule.emit();
  }
}
