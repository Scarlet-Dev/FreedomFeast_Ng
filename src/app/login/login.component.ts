import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { FeastFreedomApiService } from "../../shared/material-layout/services/feast-freedom-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private login: FeastFreedomApiService, ) { }


  ngOnInit() {
  }

  onSubmit(form: NgForm, providerLogin) {  
    if (providerLogin.checked) {
      console.log("is provider")
      this.login.loginProvider(form.value).subscribe((res:any) => {
        if (res == null) {
          console.log("nothing")
          return console.log("nothing")
        }
        else {
          this.storeToken(res)
          this.router.navigateByUrl('users/provider')
        }
      })
    }
    else {
      this.login.loginUser(form.value).subscribe((res: any) => {
        if (res == null) {
          console.log("nothing")
          return console.log("nothing")
        }
        else {
          this.storeToken(res)
          this.router.navigateByUrl('users/user/')
        }
      })
    }
  }

  storeToken(res){
    localStorage.setItem("id", res.id)
    localStorage.setItem("email", res.email)
    localStorage.setItem("ACCESS_TOKEN", res.token)
    localStorage.setItem("EXPIRES_IN", res.expiresIn);
  }
}

