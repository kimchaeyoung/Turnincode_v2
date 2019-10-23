import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hw-register',
  templateUrl: './hw-register.component.html',
  styleUrls: ['./hw-register.component.css'],
  providers: [UserService]
})
export class HwRegisterComponent implements OnInit {
  register;

  constructor(route: ActivatedRoute, private userService: UserService, private router:Router) { 
  }

  ngOnInit() {
      this.register = {
      prof: 'Kchaeyoung',
      hw_name: '',
      hw_base: '',
      hw_eval: '',
      hw_description: '',
      hw_duedate: '',
    };
  }
  Register(){
    this.userService.registerHomework(this.register).subscribe(
      response => {
        this.router.navigateByUrl('professor-page/manage');
      },
      error => console.log('error', error)
    )
  }
}

