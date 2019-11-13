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
  register = {};
  hwlist : any = [];  
  message = '';

  constructor(private http:HttpClient, route: ActivatedRoute, private userService: UserService, private router:Router) { 
    this.http.get('./professor-page/getregister/').subscribe(
	response=> {
            this.hwlist = response;
            let i;
            if(this.hwlist != null){
                for(i = 0; i< this.hwlist.length; i++){
                    this.register[i] = {hw_name: '', hw_description: '', hw_duedate:''}
                }
            }
            else{
                this.message = '과제를 등록해주세요';
            }
	},
	error => console.log('error',error)
      ) 
  }

  ngOnInit() {
  }

  Register(num, hw_id){
    this.userService.registerHomework(this.register[num], hw_id).subscribe(
      response => {
        this.router.navigateByUrl('professor-page');
      },
      error => console.log('error', error)
    )
  }
}

