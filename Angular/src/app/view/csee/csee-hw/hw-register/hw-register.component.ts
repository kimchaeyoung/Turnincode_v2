import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../../../state.service';

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

  username: string;

  constructor(private stateService : StateService, private http:HttpClient, route: ActivatedRoute, private userService: UserService, private router:Router)
  { 
    this.getHw();
  }

  ngOnInit() {
    this.stateService.username.subscribe(result => {
        this.username = result;
    });
  }

  Register(num, hw_id){
    this.stateService.changeUsername(this.register[num]['hw_name']);
    this.userService.registerHomework(this.register[num], hw_id).subscribe(
      response => {
        this.getHw();
        this.router.navigateByUrl('professor-page/register');
      },
      error => console.log('error', error)
    )
  }
 
 getHw(){
  this.http.get('./professor-page/getregister/').subscribe(
            response=> {
                this.hwlist = response;
                let i;
                this.register = {};
                if(this.hwlist != null){
                    for(i = 0; i< this.hwlist.length; i++){
                        this.register[i] = {hw_name: '', hw_description: '', hw_duedate:''}
                    }
                 }
                else{
                    this.message = '과제를 등록해주세요';
                }
            }
        ); 
   }
 
}

