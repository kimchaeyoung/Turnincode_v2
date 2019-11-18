import { CommonModule } from "@angular/common"
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  hideme:any = {};

  constructor(private http:HttpClient, route: ActivatedRoute) {
        route.params.subscribe((params: Params) => {
          this.hw_id = params.id;
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
        });

	this.http.get('./current_user').subscribe(
            response => {
                this.current_user = response.toString();
            },
        );

        Object.keys(this.hideme).forEach(h => {
          this.hideme[h] = true;
        });
  }

  ngOnInit() {
  }
  
  runcode(){
    this.http.get('./result/'+this.hw_id).subscribe(
        response=> {
            this.hw_score.unshift(response);
        },
    )
  }

  ShowTerminal(date:any, commit:any, result:any){
    this.terminal_date = date;
    this.terminal_commit = commit;
    this.terminal_result = result;
  }

  onClick(index) {
    if(this.hideme[index] == true){
      this.hideme[index] = false;
    }
    else{
      this.hideme[index] = true;
    }
  }
}
