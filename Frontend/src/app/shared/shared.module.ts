import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { NoServicePageComponent } from './pages/no-service-page/no-service-page.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { QuantityButtonsComponent } from './components/quantity-buttons/quantity-buttons.component';



@NgModule({
  declarations: [
    MenuSidebarComponent,
    NoServicePageComponent,
    TooltipComponent,
    QuantityButtonsComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MenuSidebarComponent,
    NoServicePageComponent,
    QuantityButtonsComponent
  ]
})
export class SharedModule { }
