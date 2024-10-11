import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../../interfaces/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${ this.baseUrl }/schedules`);
  }
}
