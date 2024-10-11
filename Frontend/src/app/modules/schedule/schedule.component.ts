import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/services/modal/modal.service';
import { ScheduleService } from '../../core/services/schedule/schedule.service';
import { Schedule } from '../../core/interfaces/schedule.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {
  public schedules: Schedule[] = [];

  constructor(
    private readonly _modalService: ModalService,
    private readonly _scheduleService: ScheduleService
  ){}

  ngOnInit(): void {
    this._scheduleService.getSchedules()
      .subscribe(items => this.schedules = items);
  }

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
