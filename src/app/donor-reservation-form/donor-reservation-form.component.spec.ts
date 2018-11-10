import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorReservationFormComponent } from './donor-reservation-form.component';

describe('DonorReservationFormComponent', () => {
  let component: DonorReservationFormComponent;
  let fixture: ComponentFixture<DonorReservationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorReservationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
