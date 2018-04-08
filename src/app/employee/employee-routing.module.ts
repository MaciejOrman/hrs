import { CanDeactivateEmployee } from './can-deactivate-employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new'
  },
  {
    path: 'search/:value',
    component: EmployeeContainerComponent
  },
  {
    path: ':id',
    component: EmployeeContainerComponent,
    canDeactivate: [CanDeactivateEmployee]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
