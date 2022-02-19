import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremimumplanComponent } from './premimumplan.component';

describe('PremimumplanComponent', () => {
  let component: PremimumplanComponent;
  let fixture: ComponentFixture<PremimumplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremimumplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremimumplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
