import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownViewChildParentComponent } from './countdown-view-child-parent.component';

describe('CountdownViewChildParentComponent', () => {
  let component: CountdownViewChildParentComponent;
  let fixture: ComponentFixture<CountdownViewChildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownViewChildParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownViewChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
