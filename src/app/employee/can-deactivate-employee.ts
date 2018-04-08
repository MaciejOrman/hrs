import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs/Observable';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import {ActivatedRouteSnapshot, RouterStateSnapshot,  CanDeactivate} from '@angular/router';

@Injectable()
export class CanDeactivateEmployee implements CanDeactivate<EmployeeContainerComponent> {

    constructor(private employeeService: EmployeeService, private snackBar: MatSnackBar) {}

    canDeactivate(component: EmployeeContainerComponent, currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {

        if (this.employeeService.isEdited()) {
            this.snackBar.open('You have UNSAVED changes', 'OK', {
                duration: 2000,
            });
        }
        return !this.employeeService.isEdited();
    }

}
