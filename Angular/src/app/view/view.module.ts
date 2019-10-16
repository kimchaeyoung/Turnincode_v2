import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CseeModule } from './csee/csee.module';
import { StudentModule } from './student/student.module';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

export const ROUTES:Routes = [
    { path: '', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
]
 
@NgModule({
  imports: [
    HttpClientModule,
    CseeModule,
    StudentModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ]
})
export class ViewModule { }
