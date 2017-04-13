import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { GoogleLoginComponent } from './components/google.component';
import { SigninComponent } from './components/signin.component';
import { UserProfileComponent } from './components/userprofile.component'



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    GoogleLoginComponent,
    SigninComponent,
    UserProfileComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}

