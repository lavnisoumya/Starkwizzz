import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusfirstComponent } from './aboutusfirst.component';

describe('AboutusfirstComponent', () => {
  let component: AboutusfirstComponent;
  let fixture: ComponentFixture<AboutusfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusfirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
