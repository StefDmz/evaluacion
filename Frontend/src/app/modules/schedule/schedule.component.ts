import { Component } from '@angular/core';
import { ModalService } from '../../core/services/modal/modal.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
  constructor(
    private readonly _modalService: ModalService
  ){}

  public get isOpen(): boolean {
    return this._modalService.isOpen;
  }

  public get isClosing(): boolean {
    return this._modalService.isClosing;
  }

  public closeModal(): void {
    this._modalService.closeModal();
  }
}
