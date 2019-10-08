import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseeHwComponent } from './csee-hw.component';

describe('CseeHwComponent', () => {
  let component: CseeHwComponent;
  let fixture: ComponentFixture<CseeHwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseeHwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseeHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
