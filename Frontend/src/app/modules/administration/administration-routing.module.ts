import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrationComponent } from './administration.component';
import { ProductAdminComponent } from './pages/product-admin/product-admin.component';
import { CategoryAdminComponent } from './pages/category-admin/category-admin.component';
import { SchedulesAdminComponent } from './pages/schedules-admin/schedules-admin.component';
import { InformationAdminComponent } from './pages/information-admin/information-admin.component';

const routes: Routes = [
    { path: '', component: AdministrationComponent, children: [
        { path: 'products', component: ProductAdminComponent },
        { path: 'categories', component: CategoryAdminComponent },
        { path: 'schedules', component: SchedulesAdminComponent },
        { path: 'info', component: InformationAdminComponent },
    ] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule { }
