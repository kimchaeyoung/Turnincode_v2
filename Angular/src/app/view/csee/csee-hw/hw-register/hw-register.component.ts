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
  hw_id = '';
  hwinfo: any = [];

  constructor(private http:HttpClient, route: ActivatedRoute, private userService: UserService, private router:Router) { 
  this.hw_id = route.snapshot.params['id']; 
  }

  ngOnInit() {
      this.http.get('./professor-page/getregister/'+this.hw_id).subscribe(
	response=> {
		this.hwinfo=response;
	},
	error => console.log('error',error)
      )
      this.register = {
	hw_name: '',
      	hw_base: '',
      	hw_eval: '',
      	hw_description: '',
      	hw_duedate: '',
        hw_madeby: 'jhj1116',
    };

  }

  Register(){
    this.userService.registerHomework(this.register).subscribe(
      response => {
        this.router.navigateByUrl('professor-page');
      },
      error => console.log('error', error)
    )
  }
}

