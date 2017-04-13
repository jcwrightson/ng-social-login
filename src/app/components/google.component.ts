import { Component, Output, EventEmitter } from '@angular/core'
import { userModel } from '../app.interfaces'

@Component({
  selector: 'google-login',
  template: `
  <div id="google-signin" class="g-signin2"></div>
  <button *ngIf="signedIn" (click)="onSignOut()">Signout</button>`
})

export class GoogleLoginComponent{ 

    signedIn:boolean = false;

    @Output() user = new EventEmitter()

    constructor(){
       
    }

    ngOnInit(){
        gapi.signin2.render('google-signin', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': (param: any) => this.onSignIn(param)
        })
    }

    onSignIn(googleUser: any) {
        let profile = googleUser.getBasicProfile()
        this.signedIn = true
        this.user.emit({
            "id" : profile.getId(),
            "name" : profile.getName(),
            "img" : profile.getImageUrl(),
            "email" : profile.getEmail()
        })
    }

    onSignOut(){
        let self = this
        this.signedIn = false
        gapi.auth2.getAuthInstance()
                .signOut()
                .then(()=>{
                    self.user.emit(undefined);
        });
    }
    
}
