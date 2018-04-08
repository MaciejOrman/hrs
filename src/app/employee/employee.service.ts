import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee.model';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';

@Injectable()
export abstract class EmployeeService {

  private _isEdited = false;

  constructor(protected _http: Http,
    @Inject(APP_BASE_HREF) protected baseHref: string) {}

  isEdited() {
    return this._isEdited;
  }

  setEdited(edited: boolean){
    this._isEdited = edited;
  }

  abstract getAll(): Observable<Employee[]>;

  abstract getById(id: number): Observable<Employee>;

  abstract save(employee: Employee): Observable<Employee>;

  abstract update(employee: Employee): Observable<Employee>;

  abstract delete(id: number): Observable<boolean>;

  abstract search(value: String): Observable<Employee[]>;

}
