import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hw-detail',
  templateUrl: './hw-detail.component.html',
  styleUrls: ['./hw-detail.component.css']
})
export class HwDetailComponent implements OnInit {

  hw_id = '';
  std_id = '';
  detail : any = [];
  
  constructor(private http: HttpClient, route: ActivatedRoute) {
    this.hw_id = route.snapshot.params['id'];
    this.std_id = route.snapshot.params['std_id'];
 }

  ngOnInit() {
    this.http.get('./professor-page/getscorestd/' + this.hw_id + '/' + this.std_id).subscribe(
        response=> {
            this.detail = response;
        }
    )
  }

}
