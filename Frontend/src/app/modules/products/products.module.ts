import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { ImagePipePipe } from './pipes/imagePipe/image-pipe.pipe';




@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductSidebarComponent,

    //pipes
    ImagePipePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
