import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsalesComponent } from './recentsales.component';

describe('RecentsalesComponent', () => {
  let component: RecentsalesComponent;
  let fixture: ComponentFixture<RecentsalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentsalesComponent]
    });
    fixture = TestBed.createComponent(RecentsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
