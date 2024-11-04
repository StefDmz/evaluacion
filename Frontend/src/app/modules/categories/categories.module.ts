import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    CategoriesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
], exports: [
    CategoriesTableComponent
  ]
})
export class CategoriesModule { }
