import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdescriptionComponent } from './testdescription.component';

describe('TestdescriptionComponent', () => {
  let component: TestdescriptionComponent;
  let fixture: ComponentFixture<TestdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
