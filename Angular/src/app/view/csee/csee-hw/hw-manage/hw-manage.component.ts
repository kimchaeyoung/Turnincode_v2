import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hw-manage',
  templateUrl: './hw-manage.component.html',
  styleUrls: ['./hw-manage.component.css'],
})
export class HwManageComponent implements OnInit {

  hw_id = '';
  hw_name = '';
  hw_duedate = '';
  scorelist: any =[];

  constructor(private http:HttpClient, route: ActivatedRoute) { 
    route.params.subscribe((params: Params) => {
        this.hw_id = params.id;
        this.http.get('./professor-page/getscoreboard/'+this.hw_id).subscribe(
          response=> {
            this.hw_name = response[0];
            this.hw_duedate = response[1];
            this.scorelist = response[2];
          }
        ); 
    });
  }

  ngOnInit() {
  }
}

