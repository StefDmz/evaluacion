import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../interfaces/order.interface';
import { CartService } from '../cart/cart.service';
import { Token } from '../../../../environments/whatsappToken';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private token: string = Token.wppToken;

  constructor(
    private http: HttpClient,
    private readonly _cartService: CartService
  ) { }

  public sendMessage(order: Order): void {
    const date = new Date();
    const folio = date.getFullYear().toString().slice(2, 2) + (date.getMonth() + 1) + date.getDate() + "-001";

    let messageToSend = `Pastes y Tacos SA-bro-_SOS_\n\n*Número del pedido:* ${ folio }.\n\n`;

    this._cartService.productsToBuy.forEach(item => {
      messageToSend += `* *${ item.quantity }* x ${ item.product.name } ($${ item.quantity * item.product.price })\n`;
    });

    messageToSend += `\n*Subtotal:* $${ this._cartService.subtotal }\n*+ Propina:* $${ order.tips }\n   *Total:* $${ order.tips + this._cartService.subtotal }\n\n` +
    `*Pagaré con:* ${ order.paymentMethod }`;
    
    if(order.paymentMethod == 'efectivo'){
      messageToSend += ` (_$${ order.paidWith }_)`;
    }

    messageToSend += `\n\n*Número de contacto:* ${ order.clientTelephone }\n\n`;

    messageToSend += order.deliveryType == 'domicilio' ? 
      `*Domicilio para la entrega:*\n   Zona, col. o SMZ: ${ order.neighborhood }\n   Calle o mz: ${ order.street }\n   Número exterior: ${ order.exteriorNumber }\n   Referencias: ${ order.references }\n\n` :
      `*Pasaré a recogerlo*\n\n`;

    messageToSend += `> Comentarios: ${ order.comentaries }\n\n${ order.clientName }, tu pedido se está elaborando con cuidado. \n\nGracias por tu preferencia.`;

    this.sendToWhatsapp(messageToSend);
  }

  private sendToWhatsapp(message: string): void {
    const body = {
      "messaging_product": "whatsapp",
      "preview_url": false,
      "recipient_type": "individual",
      "to": "525580252703",
      "type": "text",
      "text": {
        "body": message
      }
    };

    this.http.post('https://graph.facebook.com/v20.0/464393396754661/messages', body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ this.token }`
      }
    }).subscribe();
  }
}
