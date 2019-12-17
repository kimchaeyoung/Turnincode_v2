import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css'],
  providers: [UserService]
})

export class StudentSignUpComponent implements OnInit{
  signup;

  constructor(private http:HttpClient, private userService:UserService, private router:Router){}

  ngOnInit(){
    this.http.get('./current_user').subscribe(
      response => {
        this.signup = {
          student_id: response.toString(),
          student_name: '',
          student_number: '',
        };
      },
    )
  }
  SignUp(){
    this.userService.signupNewStudent(this.signup).subscribe(
      response => {
          this.router.navigateByUrl('/student-page');
      },
      error => console.log('error', error)
    )
  }
}
