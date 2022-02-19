import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactformdesginComponent } from './contactformdesgin.component';

describe('ContactformdesginComponent', () => {
  let component: ContactformdesginComponent;
  let fixture: ComponentFixture<ContactformdesginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactformdesginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactformdesginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
