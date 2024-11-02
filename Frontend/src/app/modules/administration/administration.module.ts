import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { provideHttpClient } from '@angular/common/http';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { CategoriesModule } from '../categories/categories.module';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { SchedulesAdminComponent } from './pages/schedules-admin/schedules-admin.component';
import { InformationAdminComponent } from './pages/information-admin/information-admin.component';



@NgModule({
  declarations: [
    AdministrationComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    SchedulesAdminComponent,
    InformationAdminComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    ProductsModule,
    CategoriesModule,
  ],
  providers: [provideHttpClient()]
})
export class AdministrationModule { }
