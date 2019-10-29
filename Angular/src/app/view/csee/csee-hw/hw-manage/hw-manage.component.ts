import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hw-manage',
  templateUrl: './hw-manage.component.html',
  styleUrls: ['./hw-manage.component.css'],
})
export class HwManageComponent implements OnInit {

  hw_id = '';
  scorelist: any =[];

  constructor(private http:HttpClient, route: ActivatedRoute) { 
    this.hw_id = route.snapshot.params['id']
  }

  ngOnInit() {
    this.http.get('./professor-page/getscoreboard/'+this.hw_id).subscribe(
        response=> {
          this.scorelist = response;
        }
    ) 

  }
}

