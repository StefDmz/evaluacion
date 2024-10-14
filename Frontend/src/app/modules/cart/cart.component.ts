import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { CartService } from '../../core/services/cart/cart.service';
import { Order } from '../../core/interfaces/order.interface';
import { OrdersService } from '../../core/services/orders/orders.service';

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
    private readonly _cartService: CartService
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

  public finishOrder(orderComplete: Order): void {
    const date = new Date();
    const folio = date.getFullYear().toString().slice(0, 2) + date.getMonth() + date.getDay() + '-001';  

    let messageToSend = `Nombre del negocio\n\n*Número del pedido:* ${ folio }.\n\n`;

    this._cartService.productsToBuy.forEach(item => {
      messageToSend += `* *${ item.quantity }* x ${ item.product.name } ($${ item.quantity * item.product.price })\n`;
    });

    messageToSend += `*Subtotal:* $${ this._cartService.subtotal }\n*+ Propina:* $${ this.order.tips }\n   *Total:* $${ this.order.tips + this._cartService.subtotal }\n\n` +
    `*Pagaré con:* ${ this.order.paymentMethod }\n\n*Número de contacto:* ${ this.order.clientTelephone }\n\n`;

    if(this.order.deliveryType == 'domicilio'){
      messageToSend += `*Domicilio para la entrega:*\n   Zona, col. o SMZ: ${ this.order.neighborhood }\n   Calle o mz: ${ this.order.street }\n   Número exterior: ${ this.order.exteriorNumber }\n   Referencias: ${ this.order.references }\n\n`;
    } else {
      messageToSend += `*Pasaré a recogerlo*\n\n`;
    }

    messageToSend += `${ this.order.clientName }, tu pedido se está preparando en FA. \n\nGracias por tu preferencia.`;

    window.location.href = "https://wa.me/5215580252703?text=" + encodeURIComponent(messageToSend);
    // this._ordersService.addOrder(orderComplete)
    //   .subscribe(x => {
    //     this._cartService.purchase(x.id);
    //   }); 
      
    // this.formPage = 1;

    // this.closeSidebar();
    
    // alert('Pedido registrado exitosamente en la base de datos');
  }

  public changePage(next: boolean): void {
    if (next) {
      this.formPage++;
      return;
    }
    this.formPage--;
  }

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
