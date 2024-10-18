import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './components/map/map.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { NoServicePageComponent } from './pages/no-service-page/no-service-page.component';
import { QuantityButtonsComponent } from './components/quantity-buttons/quantity-buttons.component';



@NgModule({
  declarations: [
    MapComponent,
    MenuSidebarComponent,
    NoServicePageComponent,
    QuantityButtonsComponent,
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MapComponent,
    MenuSidebarComponent,
    NoServicePageComponent,
    QuantityButtonsComponent,
  ]
})
export class SharedModule { }
