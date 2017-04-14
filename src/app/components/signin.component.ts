import { Component, Input, Output, EventEmitter, NgZone, ApplicationRef} from '@angular/core';
import { userModel } from '../app.interfaces'

@Component({
  selector: 'sign-in',
  template: `
    <google-login (user)="onUser($event)"></google-login> 
    
  `,
})

export class SigninComponent  { 

@Output()
private userProfile = new EventEmitter

    constructor(public zone : NgZone, public appRef: ApplicationRef){
  
    }

    onUser(user: userModel){
  
        this.userProfile.emit(user);
        console.log('Emitted: ', user);
    }
}