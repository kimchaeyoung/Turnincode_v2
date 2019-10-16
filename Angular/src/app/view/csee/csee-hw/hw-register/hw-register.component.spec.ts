import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwRegisterComponent } from './hw-register.component';

describe('HwRegisterComponent', () => {
  let component: HwRegisterComponent;
  let fixture: ComponentFixture<HwRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
