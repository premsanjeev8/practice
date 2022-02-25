import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corousel2Component } from './corousel2.component';

describe('Corousel2Component', () => {
  let component: Corousel2Component;
  let fixture: ComponentFixture<Corousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corousel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
