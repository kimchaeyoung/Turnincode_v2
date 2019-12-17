import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwDetailComponent } from './hw-detail.component';

describe('HwDetailComponent', () => {
  let component: HwDetailComponent;
  let fixture: ComponentFixture<HwDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
