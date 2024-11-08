import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { CategoriesModule } from '../categories/categories.module';
import { ScheduleModule } from '../schedule/schedule.module';

import { AdministrationComponent } from './administration.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { SchedulesAdminComponent } from './pages/schedules-admin/schedules-admin.component';
import { InformationAdminComponent } from './pages/information-admin/information-admin.component';
import { InformationSidebarComponent } from './components/information-sidebar/information-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdministrationComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    SchedulesAdminComponent,
    InformationAdminComponent,
    InformationSidebarComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    ProductsModule,
    CategoriesModule,
    ScheduleModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()]
})
export class AdministrationModule { }
