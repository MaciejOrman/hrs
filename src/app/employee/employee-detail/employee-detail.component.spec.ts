import { APP_BASE_HREF } from '@angular/common';
import { EmployeeModule } from './../employee.module';
import { EmployeeService } from './../employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailComponent } from './employee-detail.component';

describe('EmployeeDetailComponent', () => {
  let component: EmployeeDetailComponent;
  let fixture: ComponentFixture<EmployeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        EmployeeModule
      ],
      providers: [
        EmployeeService,
        { provide: APP_BASE_HREF },
        {provide: MATERIAL_SANITY_CHECKS, useValue: false}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
