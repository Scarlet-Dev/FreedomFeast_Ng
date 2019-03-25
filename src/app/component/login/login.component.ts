import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { NgForm, Form, FormArray } from "@angular/forms";

import { FeastFreedomApiService } from "../../services/feast-freedom-api.service";
import { LocalStorageService } from "../../services/local-storage.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() providerLogin: boolean;

  // @ViewChild('f') loginForm: NgForm;
  constructor(private router: Router,
    private login: FeastFreedomApiService,
    public storage: LocalStorageService) { }


  ngOnInit() {
  }

  onSubmit(form) {
    if (this.providerLogin) {
      this.login.loginProvider(form).subscribe((res) => {
        this.router.navigateByUrl('users/provider/')
      })
    }
    else {
      this.login.loginUser(form).subscribe((res) => {
        this.router.navigateByUrl('users/user/')
      })
    }
  }
}

