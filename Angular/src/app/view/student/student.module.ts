import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSignInComponent } from './student-sign-in/student-sign-in.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentPageComponent } from './student-page/student-page.component';
import { MypageComponent } from './student-page/mypage/mypage.component';
import { SearchComponent } from './student-page/search/search.component';

export const ROUTES:Routes = [
    { path: '', component: StudentSignInComponent },
    { path: 'student-signup', component: StudentSignUpComponent },    
    { 
      path: 'student-page',
      component: StudentPageComponent,
      children: [
          { path: 'mypage', component: MypageComponent },
          { path: 'search', component: SearchComponent }
      ]
    }
]



@NgModule({
  declarations: [StudentSignInComponent, StudentSignUpComponent, StudentPageComponent, MypageComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
  ]
})
export class StudentModule { }
