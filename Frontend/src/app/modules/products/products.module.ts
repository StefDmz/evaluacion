import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipePipe } from './pipes/imagePipe/image-pipe.pipe';

import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { FormSidebarComponent } from './components/form-sidebar/form-sidebar.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductSidebarComponent,
    LayoutComponent,
    ProductTableComponent,
    FormSidebarComponent,
    
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
