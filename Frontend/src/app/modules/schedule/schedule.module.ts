import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { SortPipePipe } from './pipes/sortPipe/sort-pipe.pipe';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScheduleComponent,
    SortPipePipe,
    ScheduleTableComponent,
    ScheduleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    ScheduleComponent,
    ScheduleTableComponent,
    ScheduleFormComponent,
  ]
})
export class ScheduleModule { }
