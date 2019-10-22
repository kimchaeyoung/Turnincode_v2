import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CseeLoginComponent } from './csee-login/csee-login.component';
import { CseeHwComponent } from './csee-hw/csee-hw.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HwRegisterComponent } from './csee-hw/hw-register/hw-register.component';
import { HwManageComponent } from './csee-hw/hw-manage/hw-manage.component';
import { CseeSignupComponent } from './csee-signup/csee-signup.component';

export const ROUTES:Routes = [
    { path: 'signup/csee', component: CseeSignupComponent },
    { 
      path: 'professor-page', 
      component: CseeHwComponent, 
      children: [ 
          { path: 'register', component: HwRegisterComponent },
          { path: 'manage', component: HwManageComponent }
      ]
    }
]

@NgModule({
  declarations: [CseeLoginComponent, CseeHwComponent, HwRegisterComponent, HwManageComponent, CseeSignupComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ]
})
export class CseeModule { }
