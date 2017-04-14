import { Component, Output, EventEmitter } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { userModel } from '../app.interfaces'

@Component({
  selector: 'twitter-login',
  template: `

  <button (click)="initSignIn()">Login with Twitter</button>

  `
})

export class TwitterLoginComponent{ 
    private _url: string = "https://api.twiter.com/oauth/request_token"

    constructor(private http: Http){}

    initSignIn(){
        
        // this.headers.set("oath_callback", "dasdsa")
        // this.http.post(this._url, '', ['oauth_callback'])
        //     .subscribe((request_token)=>{
        //     console.log(request_token);
        // })

        this.http.get('//api.twitter.com')
            .subscribe((response)=>{
            console.log(response);
        })
    }

    
}
