import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmisssionComponent } from './ourmisssion.component';

describe('OurmisssionComponent', () => {
  let component: OurmisssionComponent;
  let fixture: ComponentFixture<OurmisssionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurmisssionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurmisssionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
