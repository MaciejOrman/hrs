import { Employee } from './../employee.model';
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'hrs-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  @Input() employees: Employee[];
  @Output() private employeeSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() private employeeDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  selectEmployee(id: number) {
    this.employeeSelected.emit(id);
  }

  deleteEmployee(id: number) {
    this.employeeDeleted.emit(id);
  }

}
