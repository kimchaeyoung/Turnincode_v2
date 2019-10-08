import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-csee-login',
  templateUrl: './csee-login.component.html',
  styleUrls: ['./csee-login.component.css'],
  providers: [UserService]
})

export class CseeLoginComponent implements OnInit {
  signin;

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
    this.signin = {
      username: '',
      password: '',
      email: ''
    };
  }
  SignIn(){
    this.userService.signinNewCsee(this.signin).subscribe(
      response => {
        this.router.navigateByUrl('csee/csee-hw');
      },
      error => console.log('error', error)
    )
  }
}
