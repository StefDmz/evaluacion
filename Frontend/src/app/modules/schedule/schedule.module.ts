import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { SortPipePipe } from './pipes/sortPipe/sort-pipe.pipe';



@NgModule({
  declarations: [
    ScheduleComponent,
    SortPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScheduleComponent
  ]
})
export class ScheduleModule { }
