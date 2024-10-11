import { Pipe, PipeTransform } from '@angular/core';
import { Schedule } from '../../../../core/interfaces/schedule.interface';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(schedules: Schedule[]): Schedule[] {
    return schedules.sort((a, b) => (a.weekDayId > b.weekDayId) ? 1 : -1);
  }

}
