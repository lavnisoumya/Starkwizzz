import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgiationbarComponent } from './navgiationbar.component';

describe('NavgiationbarComponent', () => {
  let component: NavgiationbarComponent;
  let fixture: ComponentFixture<NavgiationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavgiationbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgiationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
