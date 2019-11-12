import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  faBook = faBook;
  faUser = faUser;
  hwlist : any=[];
  current_user = '';  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('./current_user').subscribe(
      response => {
        this.current_user = response.toString();
      },
    )
    this.http.get('./student-mypage').subscribe(
      response => {
          this.hwlist = response;
       },
    )
  }

}
