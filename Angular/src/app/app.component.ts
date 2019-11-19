import { Component,ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_user = '';

  constructor(private http:HttpClient, private router: Router) {}
  
  ngOnInit() {
      this.http.get('./current_user').subscribe(
          response => {
              this.current_user = response.toString();
          },
      )
  }
}
