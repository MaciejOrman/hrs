import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.model';
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/mergeMap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hrs-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  @ViewChild('employeeForm')
  private employeeForm: NgForm;

  @Input() public employee: Employee;
  @Output() public employeeSaved: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() public employeeUpdated: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) { }

  saveOrUpdate() {
     (this.employee.id ? this.employeeUpdated : this.employeeSaved).emit(this.employee);
  }

  resetForm() {
    this.employeeForm.resetForm();
  }

  formChanged() {
    this.employeeService.setEdited(true);
  }

  isEdited() {
    return this.employeeService.isEdited();
  }

  setNotEdited() {
    this.employeeService.setEdited(false);
  }

}
