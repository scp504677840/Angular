import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownViewChildComponent } from './countdown-view-child.component';

describe('CountdownViewChildComponent', () => {
  let component: CountdownViewChildComponent;
  let fixture: ComponentFixture<CountdownViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
