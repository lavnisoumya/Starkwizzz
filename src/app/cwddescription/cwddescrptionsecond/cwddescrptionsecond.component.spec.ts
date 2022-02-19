import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwddescrptionsecondComponent } from './cwddescrptionsecond.component';

describe('CwddescrptionsecondComponent', () => {
  let component: CwddescrptionsecondComponent;
  let fixture: ComponentFixture<CwddescrptionsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwddescrptionsecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwddescrptionsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
