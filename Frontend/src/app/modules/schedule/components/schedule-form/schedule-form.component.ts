import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from '../../../../core/interfaces/schedule.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { ScheduleService } from '../../../../core/services/schedule/schedule.service';

@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styles: ``
})
export class ScheduleFormComponent implements OnInit {
  @Input() schedule!: Schedule;

  public loading: boolean = false;

  public scheduleForm = new FormGroup({
    id: new FormControl<number>(0),
    open: new FormControl<string | null>(null),
    close: new FormControl<string | null>(null),
    day: new FormControl<string>('')
  });

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.scheduleForm.reset(this.schedule);
  }

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public get currentSchedule(): Schedule {
    return this.scheduleForm.value as Schedule;
  }

  public get openError(): boolean {
    return ((this.currentSchedule.open == null || this.currentSchedule.open == "") && (this.currentSchedule.close != null && this.currentSchedule.close != ""));
  }

  public get closeError(): boolean {
    return ((this.currentSchedule.open != null && this.currentSchedule.open != "") && (this.currentSchedule.close == null || this.currentSchedule.close == ""));
  }

  public submit(): void {
    if(this.openError || this.closeError) return;

    this.loading = true;

    if(this.currentSchedule.close == "") this.currentSchedule.close = null;
    if(this.currentSchedule.open == "") this.currentSchedule.open = null;

    this._scheduleService.editSchedule(this.currentSchedule)
      .subscribe(() => {
        location.reload();
      });
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
