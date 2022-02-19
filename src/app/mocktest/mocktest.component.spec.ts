import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestComponent } from './mocktest.component';

describe('MocktestComponent', () => {
  let component: MocktestComponent;
  let fixture: ComponentFixture<MocktestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocktestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
