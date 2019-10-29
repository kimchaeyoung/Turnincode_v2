import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css'],
  providers: [UserService]
})

export class StudentSignUpComponent implements OnInit{
  signup;

  constructor(private userService:UserService, private router:Router){}

  ngOnInit(){
    this.signup = {
      student_id: '',
      student_name: '',
      student_number: '',
    };
  }
  SignUp(){
    this.userService.signupNewStudent(this.signup).subscribe(
      response => {
          this.router.navigateByUrl('/');
      },
      error => console.log('error', error)
    )
  }
}
