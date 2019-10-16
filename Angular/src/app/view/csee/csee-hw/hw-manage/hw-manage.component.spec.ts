import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwManageComponent } from './hw-manage.component';

describe('HwManageComponent', () => {
  let component: HwManageComponent;
  let fixture: ComponentFixture<HwManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
