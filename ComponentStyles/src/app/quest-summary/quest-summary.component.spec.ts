import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSummaryComponent } from './quest-summary.component';

describe('QuestSummaryComponent', () => {
  let component: QuestSummaryComponent;
  let fixture: ComponentFixture<QuestSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
