import { Component, OnInit } from '@angular/core';
import { faBook,  faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../../state.service';

@Component({
  selector: 'app-csee-hw',
  templateUrl: './csee-hw.component.html',
  styleUrls: ['./csee-hw.component.css'],
  providers: [StateService]
})
export class CseeHwComponent implements OnInit {
  faBook = faBook;
  faChalkboardTeacher=faChalkboardTeacher;
  hwlist: any = [];
  
  current_user = '';
  username: string = 'hello';                 

  constructor(private http:HttpClient, private stateService: StateService) 
  { }

  ngOnInit() {
     this.http.get('./current_user').subscribe(
       response => {
         this.current_user = response.toString();
        },
     )
     this.http.get('./gethw').subscribe(
      response=> {
        this.hwlist=response;
      },
      error => console.log('error', error)
    );
  
    this.stateService.username.subscribe(result => {
        this.hwlist.push([result, "2019"]);
    });
   
  }
  
}
