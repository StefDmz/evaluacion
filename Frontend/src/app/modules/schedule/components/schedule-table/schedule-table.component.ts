import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScheduleService } from '../../../../core/services/schedule/schedule.service';
import { Schedule } from '../../../../core/interfaces/schedule.interface';

@Component({
  selector: 'schedule-table',
  templateUrl: './schedule-table.component.html'
})
export class ScheduleTableComponent implements OnInit {
  @Output() onEditSchedule: EventEmitter<Schedule> = new EventEmitter();

  public schedules: Schedule[] = [];

  constructor(
    private readonly _scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this._scheduleService.getSchedules()
      .subscribe(items => {
        this.schedules = items;
      });
  }

  public editSchedule(item: Schedule): void {
    this.onEditSchedule.emit(item);
  }
}
