import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetail } from '../../interfaces/order-detail.interface';
import { CartItem } from '../../interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  private _baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public addOrderDetail(products: CartItem[], orderId: number): void {
    products.forEach(item => {
      var orderDetail = {
        orderId: orderId,
        productId: item.product.id,
        quantity: item.quantity
      };

      this.insertOrderDetail(orderDetail)
        .subscribe(x => console.log(x));
    });
  }

  private insertOrderDetail(orderDetail: OrderDetail): Observable<string> {
    return this.http.post<string>(`${ this._baseUrl }/order-details`, orderDetail);
  }
}
