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
  scorelist: any =[];

  constructor(private http:HttpClient, route: ActivatedRoute) { 
    route.params.subscribe((params: Params) => {
        this.hw_id = params.id;
        this.http.get('./professor-page/getscoreboard/'+this.hw_id).subscribe(
          response=> {
            this.scorelist = response;
          }
        ); 
    });
  }

  ngOnInit() {
  }
}

