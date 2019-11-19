import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csee-signup',
  templateUrl: './csee-signup.component.html',
  styleUrls: ['./csee-signup.component.css'],
  providers: [UserService]
})
export class CseeSignupComponent implements OnInit {
  signup;

  constructor(private http: HttpClient, private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.http.get('./current_user').subscribe(
      response => {
        this.signup = {
          professor_id: response.toString(),
          professor_name: ''
        };
      }
    )
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
