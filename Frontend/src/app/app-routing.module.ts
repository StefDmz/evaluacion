import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clients'
  },
  { 
    path: 'clients', 
    loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule) 
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
