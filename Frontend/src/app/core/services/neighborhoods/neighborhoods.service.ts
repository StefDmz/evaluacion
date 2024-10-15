import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighborhood } from '../../interfaces/neighborhood.interface';

@Injectable({
  providedIn: 'root'
})
export class NeighborhoodsService {
  private _baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getNeighborhoods(): Observable<Neighborhood[]>{
    return this.http.get<Neighborhood[]>(`${ this._baseUrl }/neighborhoods`);
  }
}
