import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient){}
  
  signupNewStudent(userData): Observable<any> {
    return this.http.post('./sstudents/', userData);
  }

  signupNewCsee(userData): Observable<any> {
    return this.http.post('./pprofessors/', userData);
  }

  signinNewCsee(userData): Observable<any> {
    return this.http.post('./auth/', userData);
  }

  signinNewStudent(userData): Observable<any> {
    return this.http.post('./auth2/', userData);
  }
  
  registerHomework(userData, hw_id): Observable<any> {
    return this.http.patch('./hhomeworks/' + hw_id + '/', userData);
  }

}
