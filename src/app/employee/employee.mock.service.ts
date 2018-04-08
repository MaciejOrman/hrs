import { EmployeeService } from './employee.service';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee.model';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

export class EmployeeMockService extends EmployeeService {

  getAll(): Observable<Employee[]> {
     return this._http.get(this.baseHref + 'assets/employees.json')
        .map((response) => response.json());
  }

  getById(id: number) {
    return this.getAll()
      .flatMap(response => response)
      .filter((employee: Employee) => {
        return employee.id === id;
      }).first();
  }

  save(employee: Employee): Observable<Employee> {
    return Observable.of(employee);
  }

  update(employee: Employee): Observable<Employee> {
    return Observable.of(employee);
  }

  delete(id: number): Observable<boolean> {
    return Observable.of(true);
  }

  search(value: String): Observable<Employee[]> {
    return this.getAll();
  }

}
