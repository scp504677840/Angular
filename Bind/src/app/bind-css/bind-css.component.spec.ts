import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCSSComponent } from './bind-css.component';

describe('BindCSSComponent', () => {
  let component: BindCSSComponent;
  let fixture: ComponentFixture<BindCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
