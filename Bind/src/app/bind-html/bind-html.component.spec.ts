import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindHtmlComponent } from './bind-html.component';

describe('BindHtmlComponent', () => {
  let component: BindHtmlComponent;
  let fixture: ComponentFixture<BindHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
