import { Component } from '@angular/core';
import { Schedule } from '../../../../core/interfaces/schedule.interface';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';
import { SidebarType } from '../../../../core/types/sidebarType';

@Component({
  selector: 'app-schedules-admin',
  templateUrl: './schedules-admin.component.html',
  styles: ``
})
export class SchedulesAdminComponent {
  public scheduleSelected!: Schedule;
  
  constructor(
    private readonly _sidebarService: SidebarService
  ) { }

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public openSidebar(item: Schedule): void {
    this.scheduleSelected = item;
    this._sidebarService.openSidebar('Edit');
  }
}
