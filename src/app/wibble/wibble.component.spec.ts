/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WibbleComponent } from './wibble.component';

describe('WibbleComponent', () => {
  let component: WibbleComponent;
  let fixture: ComponentFixture<WibbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WibbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WibbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
