import { MatSnackBar, MatSnackBarModule, MATERIAL_SANITY_CHECKS } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule, XHRBackend } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, MatSnackBarModule],
      providers: [
        EmployeeService,
        MatSnackBar,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: APP_BASE_HREF },
        { provide: MATERIAL_SANITY_CHECKS, useValue: false }]
    });
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
