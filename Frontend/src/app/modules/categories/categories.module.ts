import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { SharedModule } from "../../shared/shared.module";
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesTableComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
], exports: [
    CategoriesTableComponent,
    CategoryFormComponent,
  ]
})
export class CategoriesModule { }
