import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './components/map/map.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { NoServicePageComponent } from './pages/no-service-page/no-service-page.component';
import { QuantityButtonsComponent } from './components/quantity-buttons/quantity-buttons.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';



@NgModule({
  declarations: [
    MapComponent,
    MenuSidebarComponent,
    NoServicePageComponent,
    QuantityButtonsComponent,
    AdminSidebarComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MapComponent,
    MenuSidebarComponent,
    NoServicePageComponent,
    QuantityButtonsComponent,
    AdminSidebarComponent,
  ]
})
export class SharedModule { }
