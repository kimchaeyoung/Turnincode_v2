import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseeSignupComponent } from './csee-signup.component';

describe('CseeSignupComponent', () => {
  let component: CseeSignupComponent;
  let fixture: ComponentFixture<CseeSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseeSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseeSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
