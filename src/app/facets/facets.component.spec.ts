/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacetsComponent } from './facets.component';

describe('FacetsComponent', () => {
  let component: FacetsComponent;
  let fixture: ComponentFixture<FacetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
