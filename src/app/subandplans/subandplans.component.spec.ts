import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubandplansComponent } from './subandplans.component';

describe('SubandplansComponent', () => {
  let component: SubandplansComponent;
  let fixture: ComponentFixture<SubandplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubandplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubandplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
