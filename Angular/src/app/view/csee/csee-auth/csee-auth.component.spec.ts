import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseeAuthComponent } from './csee-auth.component';

describe('CseeAuthComponent', () => {
  let component: CseeAuthComponent;
  let fixture: ComponentFixture<CseeAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseeAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
