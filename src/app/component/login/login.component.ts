import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm } from "@angular/forms";

import { FeastFreedomApiService } from "../../services/feast-freedom-api.service";
import { LocalStorageService } from "../../services/local-storage.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FeastFreedomApiService, LocalStorageService]
})
export class LoginComponent implements OnInit {
  
  // @ViewChild('f') loginForm: NgForm;
  constructor(private router: Router, private login: FeastFreedomApiService, public storage: LocalStorageService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if(form.providerLogin.value){
      var token = this.login.Login.loginProvider(form)
      this.storage.storageOnLocalStorage("", token, true)
      this.router.navigate(['users/provider'])
    }
    else{
      var token = this.login.Login.loginUser(form)
      this.storage.storageOnLocalStorage("", token, true)
      this.router.navigate(['/users/regular/'])
    }
    // console.log(form)
    console.log("submitted")
  }
}
