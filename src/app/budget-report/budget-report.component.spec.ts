import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetReportComponent } from './budget-report.component';

describe('BudgetReportComponent', () => {
  let component: BudgetReportComponent;
  let fixture: ComponentFixture<BudgetReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetReportComponent]
    });
    fixture = TestBed.createComponent(BudgetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
