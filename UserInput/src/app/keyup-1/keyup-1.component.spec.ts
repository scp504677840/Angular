import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyup1Component } from './keyup-1.component';

describe('Keyup1Component', () => {
  let component: Keyup1Component;
  let fixture: ComponentFixture<Keyup1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Keyup1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Keyup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
