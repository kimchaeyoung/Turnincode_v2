import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CseeModule } from './csee/csee.module';
import { StudentModule } from './student/student.module';
 
@NgModule({
  imports: [
    HttpClientModule,
    CseeModule,
    StudentModule,
  ],
  declarations: [
  ]
})
export class ViewModule { }
