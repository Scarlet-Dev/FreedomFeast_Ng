import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm, Form, FormArray } from "@angular/forms";

import { FeastFreedomApiService } from "../../services/feast-freedom-api.service";
import { LocalStorageService } from "../../services/local-storage.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  // @ViewChild('f') loginForm: NgForm;
  constructor(private router: Router, private login: FeastFreedomApiService, public storage: LocalStorageService) { }

  @Input() Login = [];

  ngOnInit() {
  }

  onSubmit(Login: NgForm) {
    if(Login){
      var token = this.login.loginProvider(Login).subscribe((data:{}) => {
        this.storage.storageOnLocalStorage("", token, true)
        this.router.navigate(['users/provider'])
      })
    }
    else{
      var token = this.login.loginUser(Login).subscribe((data:{}) => {
        this.storage.storageOnLocalStorage("", token, true)
        this.router.navigate(['/users/regular'])
      })
    }
    // console.log(form)
    console.log("submitted")
  }
}
