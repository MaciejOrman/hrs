import { APP_BASE_HREF } from '@angular/common';
import { EmployeeModule } from './../employee.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContainerComponent } from './employee-container.component';

describe('EmployeeContainerComponent', () => {
  let component: EmployeeContainerComponent;
  let fixture: ComponentFixture<EmployeeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        EmployeeModule,
      ],
      providers: [
        { provide: APP_BASE_HREF },
        { provide: MATERIAL_SANITY_CHECKS, useValue: false }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
