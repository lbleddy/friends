import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeDeterminedComponent } from './to-be-determined.component';

describe('ToBeDeterminedComponent', () => {
  let component: ToBeDeterminedComponent;
  let fixture: ComponentFixture<ToBeDeterminedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToBeDeterminedComponent]
    });
    fixture = TestBed.createComponent(ToBeDeterminedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
