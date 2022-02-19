import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosefirstComponent } from './chosefirst.component';

describe('ChosefirstComponent', () => {
  let component: ChosefirstComponent;
  let fixture: ComponentFixture<ChosefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosefirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
