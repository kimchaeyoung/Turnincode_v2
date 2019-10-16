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

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    this.userService.manageHomework().subscribe(
      response=> {
        this.hwlist=response;
      },
      error => console.log('error', error)
    )
  }
}
