import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { OrderDetailsPageComponent } from './pages/order-details-page/order-details-page.component';
import { AddressDetailsPageComponent } from './pages/address-details-page/address-details-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';



@NgModule({
  declarations: [
    CartComponent,
    ItemsPageComponent,
    OrderDetailsPageComponent,
    AddressDetailsPageComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CartComponent
  ]
})
export class CartModule { }
