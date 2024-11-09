import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../../interfaces/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private _baseUrl: string = environment.baseUrl + "/schedules.php";

  constructor(
    private http: HttpClient
  ) { }

  public getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this._baseUrl);
  }

  public editSchedule(schedule: Schedule): Observable<string> {
    return this.http.put<string>(this._baseUrl, schedule);
  }
}
