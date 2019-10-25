import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-hw-manage',
  templateUrl: './hw-manage.component.html',
  styleUrls: ['./hw-manage.component.css'],
  providers: [ UserService ]
})
export class HwManageComponent implements OnInit {

  hwlist: any =[];
  current_user = '';

  constructor(private http:HttpClient, private userService: UserService) { 
  }

  ngOnInit() {
    this.http.get('./current_user').subscribe(
        response=> {
          this.current_user = response.toString();
        }
    ) 

  }
}

