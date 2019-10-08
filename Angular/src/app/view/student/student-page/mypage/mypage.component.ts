import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  runcode(){
    return this.http.get("./result/").subscribe();
  }

}
