import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { CartService } from '../../core/services/cart/cart.service';
import { Order } from '../../core/interfaces/order.interface';
import { OrdersService } from '../../core/services/orders/orders.service';
import { WhatsappService } from '../../core/services/whatsapp/whatsapp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {
  public formPage: number = 1;
  public order!: Order;

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _cartService: CartService,
    private readonly _whatsappService: WhatsappService
  ) { }

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public get numberCartItems(): number {
    return this._cartService.numberProducts;
  }

  public getFirstPartOrder(firstPart: Order): void {
    this.order = firstPart;
  }

  public finishOrder(): void {
    // window.location.href = "https://wa.me/5215580252703?text=" + encodeURIComponent(messageToSend);
    // this._ordersService.addOrder(orderComplete)
    //   .subscribe(x => {
    //     this._cartService.purchase(x.id);
    //   }); 

    this._whatsappService.sendMessage(this.order);

    this._cartService.deleteAllItems();
    
    // alert('Pedido registrado exitosamente en la base de datos');
  }

  public changePage(next: boolean): void {
    if (next) {
      this.formPage++;
      return;
    }
    this.formPage--;
    console.log(this.formPage);
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
