import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseeLoginComponent } from './csee-login.component';

describe('CseeLoginComponent', () => {
  let component: CseeLoginComponent;
  let fixture: ComponentFixture<CseeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
