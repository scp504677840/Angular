import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttwoComponent } from './producttwo.component';

describe('ProducttwoComponent', () => {
  let component: ProducttwoComponent;
  let fixture: ComponentFixture<ProducttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
