import { Component, Input, Output, EventEmitter, NgZone, ApplicationRef} from '@angular/core';
import { userModel } from '../app.interfaces'

@Component({
  selector: 'sign-in',
  template: `
    <google-login (user)="onUser($event)"></google-login> 
  `,
})

export class SigninComponent  { 

signedState: boolean;
platform: string;

@Output()
userProfile = new EventEmitter

    constructor(public zone : NgZone, public appRef: ApplicationRef){
  
    }

    //Watch for components that emit a user obj
    onUser(user: userModel){
  
        this.userProfile.emit(user);
        console.log('Emitted: ', user);
    }

    signOut() {
        let self = this;

            gapi.auth2.getAuthInstance()
                .signOut()
                .then(()=>{
                    // self.newUser.emit({});
            });
    }
    

}