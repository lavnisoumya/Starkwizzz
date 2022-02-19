import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwddescriptionComponent } from './cwddescription.component';

describe('CwddescriptionComponent', () => {
  let component: CwddescriptionComponent;
  let fixture: ComponentFixture<CwddescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwddescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
