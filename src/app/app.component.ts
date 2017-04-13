import { Component, Input, ApplicationRef } from '@angular/core';
import { userModel } from './app.interfaces'


@Component({
  selector: 'my-app',
  template: `
  <sign-in (userProfile)="onUser($event)"></sign-in>
  <user-profile [user]="_user"></user-profile>
  `,
})
export class AppComponent  { 
 
private _user: userModel;

    constructor(public appRef: ApplicationRef){

    }


    onUser(user: userModel){
      //  Catch input user and assign to local var
      this._user = user;

      // Update DOM
      // ToDo: This seems wrong
      this.appRef.tick();

      // logging
      console.log('Profile Recieved: ', user);
    }

}

