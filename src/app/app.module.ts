import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { GoogleLoginComponent } from './components/google.component';
import { TwitterLoginComponent } from './components/twitter.component';
import { SigninComponent } from './components/signin.component';
import { UserProfileComponent } from './components/userprofile.component'



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ 
    AppComponent,
    GoogleLoginComponent,
    TwitterLoginComponent,
    SigninComponent,
    UserProfileComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  
}

