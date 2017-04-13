import { Component, Input} from '@angular/core';
import { userModel } from '../app.interfaces'

@Component({
  selector: 'user-profile',
  template: `
    <div class="user-profile" *ngIf="hasProfile()">
      <ul>
        <li><img src="{{user.img}}"/></li>
        <li><label><strong>ID#: </strong></label>{{user.id}}</li>
        <li><label><strong>Name: </strong></label>{{user.name}}</li>
        <li><label><strong>Email Address: </strong></label>{{user.email}}</li>
      </ul>
    </div>
  `,
})

export class UserProfileComponent  { 

@Input('user')
private user: userModel;

    hasProfile(){
     if (this.user){
       return true
      }
    }
}