import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  
  hwlist = '';
  result = '';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('./student-mypage').subscribe(
        response=> {
            this.hwlist = response.toString();
        },
    )
  }
  
  runcode(){
    this.http.get('./result').subscribe(
        response=> {
            this.result = response.toString();
        },
    )
  }
}
