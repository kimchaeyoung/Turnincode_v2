import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csee-signup',
  templateUrl: './csee-signup.component.html',
  styleUrls: ['./csee-signup.component.css'],
  providers: [UserService]
})
export class CseeSignupComponent implements OnInit {
  signup;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.signup = {
      professor_id: '',
      professor_name: ''
    };
  }
  SignUp(){
    this.userService.signupNewCsee(this.signup).subscribe(
      response => {
          this.router.navigateByUrl('/professor-page');
      },
      error => console.log('error', error)
    )
  }
}
