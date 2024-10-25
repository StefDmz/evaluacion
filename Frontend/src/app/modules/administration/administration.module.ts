import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AdministrationComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministrationModule { }
