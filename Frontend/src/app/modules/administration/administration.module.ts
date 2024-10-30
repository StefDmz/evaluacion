import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { provideHttpClient } from '@angular/common/http';
import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AdministrationComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
  ],
  providers: [provideHttpClient()]
})
export class AdministrationModule { }
