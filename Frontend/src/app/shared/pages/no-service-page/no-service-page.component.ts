import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-no-service-page',
  templateUrl: './no-service-page.component.html'
})
export class NoServicePageComponent {
  @Output() public onShowSchedule: EventEmitter<void> = new EventEmitter();

  public showSchedule(): void {
    this.onShowSchedule.emit();
  }
}
