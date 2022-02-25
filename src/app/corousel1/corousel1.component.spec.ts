import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corousel1Component } from './corousel1.component';

describe('Corousel1Component', () => {
  let component: Corousel1Component;
  let fixture: ComponentFixture<Corousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corousel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
