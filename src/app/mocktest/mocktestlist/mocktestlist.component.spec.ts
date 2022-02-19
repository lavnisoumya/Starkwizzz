import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestlistComponent } from './mocktestlist.component';

describe('MocktestlistComponent', () => {
  let component: MocktestlistComponent;
  let fixture: ComponentFixture<MocktestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocktestlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
