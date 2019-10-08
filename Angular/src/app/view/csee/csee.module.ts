import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CseeLoginComponent } from './csee-login/csee-login.component';
import { CseeHwComponent } from './csee-hw/csee-hw.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const ROUTES:Routes = [
    { path: 'csee', component: CseeLoginComponent },
    { path: 'csee/csee-hw', component: CseeHwComponent }
]

@NgModule({
  declarations: [CseeLoginComponent, CseeHwComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
  ]
})
export class CseeModule { }
