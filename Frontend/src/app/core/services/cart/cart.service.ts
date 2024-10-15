import { Injectable } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item.interface';
import { OrderDetailsService } from '../order-details/order-details.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _productsToBuy: CartItem[] = [];

  constructor(
    private readonly _orderDetailsService: OrderDetailsService
  ){}

  public get productsToBuy(): CartItem[] {
    return this._productsToBuy;
  }

  public get numberProducts(): number {
    let totalItems = 0;
    this._productsToBuy.forEach(x => totalItems += x.quantity);
    return totalItems;
  }

  public get subtotal(): number {
    var sum: number = 0;

    this._productsToBuy.forEach(x => {
      sum += x.product.price * x.quantity;
    });

    return sum;
  }

  public addProduct(item: CartItem): void {
    const index = this._productsToBuy.findIndex(x => x.product == item.product);
    if(index > -1){
      this._productsToBuy[index].quantity += item.quantity;
      return;
    }
    this.productsToBuy.push(item);
    console.log(this._productsToBuy);
  }

  public purchase(orderId: number): void {
    this._orderDetailsService.addOrderDetail(this._productsToBuy, orderId);
    this._productsToBuy = [];
  }

  public deleteProduct(item: CartItem): void {
    const index = this._productsToBuy.indexOf(item);
    this._productsToBuy.splice(index, 1);
  }

  public updateQuantity(item: CartItem, newQuantity: number): void {
    const index = this._productsToBuy.indexOf(item);
    this._productsToBuy[index].quantity = newQuantity;
  }
}
