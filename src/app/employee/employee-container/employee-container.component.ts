import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDetailComponent } from './../employee-detail/employee-detail.component';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.model';
import { Component, ViewChild, HostListener, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'hrs-employee-container',
  templateUrl: './employee-container.component.html',
  styleUrls: ['./employee-container.component.css']
})
export class EmployeeContainerComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav')
  private sidenav: MatSidenav;
  public navMode = 'side';
  public navOpened = true;

  @ViewChild('details')
  private employeeDetail: EmployeeDetailComponent;
  private selectionSubscription: Subscription;
  private searchSubscription: Subscription;
  public selectedEmployee: Employee = <Employee>{};
  public employees: Employee[];
  public searchValue: String;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateNavbar(event.target);
  }

  ngOnInit() {
    this.employeeService.getAll().subscribe((employees) => this.employees = employees);
    this.selectionSubscription = this.subscribeForEmployeeSelection(this.route);
    this.searchSubscription = this.subscribeForEmployeeSearch(this.route);
    this.updateNavbar(window);
  }

  subscribeForEmployeeSelection(route) {
    return route.params
      .mergeMap((params) => {
        if (params && params.id !== undefined && params.id !== 'new') {
          return this.employeeService.getById(params.id);
        } else {
          this.employeeDetail.resetForm();
          return Observable.of({});
        }
      })
      .subscribe((employee: Employee) => {
        this.selectedEmployee = employee;
      });
  }

  subscribeForEmployeeSearch(route) {
    return route.params
      .map(route => route.value)
      .do(value => { this.searchValue = value; })
      .filter((query: string) => query && query.length > 0)
      .switchMap(value => {
        return this.employeeService.search(value);
      })
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }

  updateNavbar(window) {
    if (window.innerWidth < 768) {
      this.navMode = 'over';
      this.navOpened = false;
    } else if (window.innerWidth > 768) {
      this.navMode = 'side';
      this.navOpened = true;
    }
  }

  selectEmployee(id: number) {
    this.router.navigate(['/employees/', id]);
    if (this.navMode === 'over') {
      this.sidenav.close();
    }
  }

  deleteEmployee(id: number) {
    this.employeeService.delete(id)
      .subscribe((success) => {
        const msg = success ? 'Employee deleted!' : 'Error';
        this.snackBar.open(msg, 'OK', { duration: 2000 });
        this.employees = this.employees.filter(e => e.id !== id);
        this.router.navigate(['/employees']);
      });
  }

  saveEmployee(employee: Employee) {
    this.employeeService.save(employee)
      .subscribe((employee) => {
        this.employees.push(employee);
        this.snackBar.open('Employee saved!', 'OK', { duration: 2000 });
        this.router.navigate(['employees', employee.id]);
      });
  }

  updateEmployee(employee: Employee) {
      this.employeeService.update(employee)
        .subscribe((employee) => {
          this.employeeService.getAll().subscribe((employees) => { this.employees = employees; });
          this.snackBar.open('Employee updated!', 'OK', { duration: 2000 });
        });
  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }

}
