import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationComponent } from './administration.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { SchedulesAdminComponent } from './pages/schedules-admin/schedules-admin.component';
import { InformationAdminComponent } from './pages/information-admin/information-admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from '../../core/services/auth-guard/auth-guard.service';

const routes: Routes = [
    { path: '', component: AdministrationComponent, children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'products', component: ProductAdminComponent, canActivate: [AuthGuardService] },
        { path: 'categories', component: CategoryAdminComponent, canActivate: [AuthGuardService] },
        { path: 'schedules', component: SchedulesAdminComponent, canActivate: [AuthGuardService] },
        { path: 'info', component: InformationAdminComponent, canActivate: [AuthGuardService] },
        { path: 'login', component: LoginComponent }
    ] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }
