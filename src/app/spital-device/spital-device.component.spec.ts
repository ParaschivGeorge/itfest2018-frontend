import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpitalDeviceComponent } from './spital-device.component';

describe('SpitalDeviceComponent', () => {
  let component: SpitalDeviceComponent;
  let fixture: ComponentFixture<SpitalDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpitalDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpitalDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
