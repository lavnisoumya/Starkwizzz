import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdheadingComponent } from './testdheading.component';

describe('TestdheadingComponent', () => {
  let component: TestdheadingComponent;
  let fixture: ComponentFixture<TestdheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdheadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
