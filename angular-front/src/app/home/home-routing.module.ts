import { DashboardComponent } from './../dashboard/dashboard.component';
import { ClientComponent } from './../client/client.component';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'client', loadChildren: () => import('../client/client.module').then(m => m.ClientModule) },
      { path: 'employee', loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'product', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
