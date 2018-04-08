import { APP_BASE_HREF } from '@angular/common';
import { EmployeeModule } from './../employee.module';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from './../employee.service';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

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
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
