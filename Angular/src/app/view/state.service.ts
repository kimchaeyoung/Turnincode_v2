import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

@Injectable()
export class StateService {
  private usernameSource = new BehaviorSubject<string>('Onejohi Tony'); 
  username = this.usernameSource.asObservable()          

  constructor() { }

  changeUsername(username: string) {           
    this.usernameSource.next(username);  
  }
}
