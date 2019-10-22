import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSignInComponent } from './student-sign-in/student-sign-in.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentPageComponent } from './student-page/student-page.component';
import { MypageComponent } from './student-page/mypage/mypage.component';

export const ROUTES:Routes = [
    { path: 'signup/student-signup', component: StudentSignUpComponent },    
    { 
      path: 'student-page',
      component: StudentPageComponent,
      children: [
          { path: 'mypage', component: MypageComponent },
      ]
    }
]



@NgModule({
  declarations: [StudentSignInComponent, StudentSignUpComponent, StudentPageComponent, MypageComponent],
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
export class StudentModule { }
