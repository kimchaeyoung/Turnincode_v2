import { Component, OnInit } from '@angular/core';
import { faBook, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csee-hw',
  templateUrl: './csee-hw.component.html',
  styleUrls: ['./csee-hw.component.css'],
})
export class CseeHwComponent implements OnInit {
  faBook = faBook;
  faCaretDown = faCaretDown;
  hwlist: any = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
     this.http.get('./gethw').subscribe(
      response=> {
        this.hwlist=response;
      },
      error => console.log('error', error)
    )
  }
  
  

}
