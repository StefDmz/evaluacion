import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ImagePipePipe } from './pipes/imagePipe/image-pipe.pipe';

import { SharedModule } from '../../shared/shared.module';

import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductSidebarComponent,
    LayoutComponent,
    ProductTableComponent,
    ProductFormComponent,
    
    //pipes
    ImagePipePipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductsComponent,
    ProductTableComponent,
    ProductFormComponent,
  ]
})
export class ProductsModule { }
