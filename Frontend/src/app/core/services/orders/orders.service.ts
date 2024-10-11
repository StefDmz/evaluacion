import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/order.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _baseUrl: string = environment.baseUrl;
  constructor(
    private readonly http: HttpClient
  ) { }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${ this._baseUrl }/orders`, order);
  }
}
