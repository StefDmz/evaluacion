import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { NoServicePageComponent } from './pages/no-service-page/no-service-page.component';



@NgModule({
  declarations: [
    MenuSidebarComponent,
    NoServicePageComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MenuSidebarComponent,
    NoServicePageComponent
  ]
})
export class SharedModule { }
