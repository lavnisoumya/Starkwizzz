import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestdescpComponent } from './mocktestdescp.component';

describe('MocktestdescpComponent', () => {
  let component: MocktestdescpComponent;
  let fixture: ComponentFixture<MocktestdescpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocktestdescpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestdescpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
