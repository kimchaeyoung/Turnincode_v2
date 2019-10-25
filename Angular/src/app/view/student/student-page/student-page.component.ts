import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  faBook = faBook;
  hwlist : any=[];
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('./student-mypage').subscribe(
      response => {
          this.hwlist = response;
       },
    )
  }

}
