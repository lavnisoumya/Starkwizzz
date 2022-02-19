import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualplanComponent } from './annualplan.component';

describe('AnnualplanComponent', () => {
  let component: AnnualplanComponent;
  let fixture: ComponentFixture<AnnualplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
