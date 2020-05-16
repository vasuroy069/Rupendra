import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private LoginSampleVariable:string ;
  private clickCount:number ;
  constructor() {
    this.LoginSampleVariable = "Rupendra is logged in";
    this.clickCount=0;
   }

  ngOnInit() {
  }

  incrementClickCount(){
    this.clickCount++;
  }
}
