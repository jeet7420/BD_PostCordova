import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensePage } from './dispense.page';

describe('DispensePage', () => {
  let component: DispensePage;
  let fixture: ComponentFixture<DispensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
