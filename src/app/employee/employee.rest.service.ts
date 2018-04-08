import { EmployeeService } from './employee.service';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Employee } from './employee.model';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class EmployeeRestService extends EmployeeService {

  private employeeUrl: string = 'http://localhost:3000' + this.baseHref + 'api/employee';

  getAll(): Observable<Employee[]> {
     return this._http.get(this.employeeUrl)
        .map((response) => response.json());
  }

  getById(id: number) {
    return this._http.get(`${this.employeeUrl}/${id}`)
        .map((response) => response.json());
  }

  save(employee: Employee): Observable<Employee> {
    return this._http.post(this.employeeUrl, employee)
      .map((response) => response.json() as Employee)
      // tslint:disable-next-line:no-shadowed-variable
      .do((employee) => { this.setEdited(false); });
  }

  update(employee: Employee): Observable<Employee> {
    return this._http.put(`${this.employeeUrl}/${employee.id}`, employee)
      .map((response) => response.json() as Employee)
      // tslint:disable-next-line:no-shadowed-variable
      .do((employee) => { this.setEdited(false); });
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete(`${this.employeeUrl}/${id}`)
      .map((result) => result.json().count > 0 );
  }

  search(value: String): Observable<Employee[]> {
    return this._http.get(this.employeeUrl + `/?filter[where][surname][like]=${value}`)
        .map((response) => response.json());
  }

}
