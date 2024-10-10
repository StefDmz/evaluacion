import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { ProductItemComponent } from './components/product-item/product-item.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductSidebarComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent,
    ProductItemComponent
  ]
})
export class ProductsModule { }
