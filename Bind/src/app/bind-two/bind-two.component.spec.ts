import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindTwoComponent } from './bind-two.component';

describe('BindTwoComponent', () => {
  let component: BindTwoComponent;
  let fixture: ComponentFixture<BindTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
