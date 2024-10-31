import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { ImagePipePipe } from './pipes/imagePipe/image-pipe.pipe';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductTableComponent } from './components/product-table/product-table.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductSidebarComponent,
    LayoutComponent,
    ProductTableComponent,

    //pipes
    ImagePipePipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsComponent,
    ProductTableComponent,
  ]
})
export class ProductsModule { }
