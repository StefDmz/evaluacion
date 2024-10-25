import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { ClientsComponent } from './clients.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { CartModule } from '../cart/cart.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ProductsModule,
    CartModule,
    ScheduleModule,
  ],
  providers: [provideHttpClient()]
})
export class ClientsModule { }
