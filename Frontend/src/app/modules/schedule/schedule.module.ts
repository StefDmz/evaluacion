import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { SortPipePipe } from './pipes/sortPipe/sort-pipe.pipe';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    SortPipePipe,
    ScheduleTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScheduleComponent,
    ScheduleTableComponent,
  ]
})
export class ScheduleModule { }
