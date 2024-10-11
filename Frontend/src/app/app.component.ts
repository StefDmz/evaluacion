import { Component, OnInit } from '@angular/core';
import { SidebarService } from './core/services/sidebar/sidebar.service';
import { SidebarType } from './core/types/sidebarType';
import { ModalService } from './core/services/modal/modal.service';
import { Category } from './core/interfaces/category.interface';
import { ScheduleService } from './core/services/schedule/schedule.service';
import { Schedule } from './core/interfaces/schedule.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public categorySelected?: Category;
  public isRestaurantOpen: boolean = true;
  public schedules: Schedule[] = [];

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _modalService: ModalService,
    private readonly _scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.checkRestaurantSchedule();
  }

  public get sidebarType(): SidebarType {
    return this._sidebarService.sidebarType;
  }

  public get isModalOpen(): boolean {
    return this._modalService.isOpen;
  }

  public openSidebar(sidebarType: SidebarType): void {
    this._sidebarService.openSidebar(sidebarType);
  }

  public openSchedule(): void {
    this._modalService.openModal();
  }

  public categorySelect(category: Category): void {
    this.categorySelected = category;
  }

  public checkRestaurantSchedule(): void {
    const currentDate = new Date();
    const currentWeekDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    this._scheduleService.getSchedules()
      .subscribe(items => this.schedules = items);

    const schedule = this.schedules.find(x => x.weekDayId == currentWeekDay);

    if (schedule) {
      if (schedule.open == '') {
        this.isRestaurantOpen = false;
        return;
      }

      const [openHour, openMinutes] = schedule.open.split(':').map(Number);
      const [closeHour, closeMinutes] = schedule.close.split(':').map(Number);

      const isAfterOpening = (currentHour > openHour) || (currentHour === openHour && currentMinutes >= openMinutes);
      const isBeforeClosing = (currentHour < closeHour) || (currentHour === closeHour && currentMinutes < closeMinutes);

      this.isRestaurantOpen = isAfterOpening && isBeforeClosing;

    }

  }
}
