import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwdescriptionComponent } from './cwdescription.component';

describe('CwdescriptionComponent', () => {
  let component: CwdescriptionComponent;
  let fixture: ComponentFixture<CwdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
