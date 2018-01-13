import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMe2Component } from './click-me-2.component';

describe('ClickMe2Component', () => {
  let component: ClickMe2Component;
  let fixture: ComponentFixture<ClickMe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickMe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickMe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
