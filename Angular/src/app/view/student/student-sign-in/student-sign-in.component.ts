import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sign-in',
  templateUrl: './student-sign-in.component.html',
  styleUrls: ['./student-sign-in.component.css'],
  providers: [ UserService ]
})

export class StudentSignInComponent implements OnInit {
  signin;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signin = {
      username:'',
      password:'',
    };
  }
  SignIn(){
    this.userService.signinNewStudent(this.signin).subscribe(
      response => {
        this.router.navigateByUrl('student-page/mypage');
      },
      error => console.log('error', error)
    )
  }
}
