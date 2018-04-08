import { HomeComponent } from './home/home.component';
import { EmployeeContainerComponent } from './employee/employee-container/employee-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { SelectivePreloadingStrategy } from 'app/shared/selective-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'employees',
    loadChildren: 'app/employee/employee.module#EmployeeModule',
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
