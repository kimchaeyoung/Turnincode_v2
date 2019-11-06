import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  hw_id = '';
  hw_name = '';
  hw_base = '';
  hw_description = '';
  hw_duedate = '';
  hw_score: any = [];
  current_result = '';
  current_user = '';
  terminal_date = '';
  terminal_commit = '';
  terminal_result = '';


  constructor(private http:HttpClient, route: ActivatedRoute, private router:Router) {
	this.hw_id = route.snapshot.params['id'];
	this.http.get('./student-page/getinfo/'+this.hw_id).subscribe(
		response => {
			this.hw_name = response[0];
           		this.hw_base = response[1];
			this.hw_description = response[2];
			this.hw_duedate = response[3];
			this.hw_score = response[4];
		},
		error => console.log('error', error)
	);
        this.http.get('./current_user').subscribe(
            response => {
                this.current_user = response.toString();
            },
        );
  }

  ngOnInit() {
  }
  
  runcode(){
    this.http.get('./result/'+this.hw_id).subscribe(
        response=> {
            this.terminal_result = response.toString();
        },
    )
  }

  ShowTerminal(date:any, commit:any, result:any){
    this.terminal_date = date;
    this.terminal_commit = commit;
    this.terminal_result = result;
  }

}
