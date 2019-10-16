import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ UserService ] 
})
export class SearchComponent implements OnInit {

  Homework = '';
  hwlist: any=[];
  hw = '';

  constructor(private userService: UserService) {
    this.hw = '';
  }

  ngOnInit() {
  }

  getHW() {
    this.userService.searchStudent().subscribe(
      response => {
        this.hwlist = response;
        for (let hw of this.hwlist){
           if(this.Homework == hw.hw_name){
           this.hw = hw.hw_name;
           }
         }
      },
      error => console.log('error',error)
    )
  } 

}

