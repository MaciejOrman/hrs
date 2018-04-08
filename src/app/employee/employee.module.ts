import { EmployeeRestService } from './employee.rest.service';
import { CanDeactivateEmployee } from './can-deactivate-employee';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { MatListModule, MatCardModule, MatSidenavModule, MatButtonModule,
  MatIconModule, MatInputModule, MatToolbarModule, MatSnackBar, MatSnackBarContainer, MatSnackBarModule
} from '@angular/material';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { EmployeeService } from './employee.service';
import { EmployeeMockService } from './employee.mock.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    EmployeeRoutingModule,
    HttpModule
  ],
  declarations: [
    EmployeeContainerComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeSearchComponent
  ],
  providers: [
    {provide: EmployeeService,
    useClass: EmployeeRestService},
    MatSnackBar,
    CanDeactivateEmployee
  ],
  entryComponents: [MatSnackBarContainer]
})
export class EmployeeModule { }
