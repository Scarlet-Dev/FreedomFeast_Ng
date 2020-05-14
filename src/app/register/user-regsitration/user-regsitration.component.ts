import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { FeastFreedomApiService } from 'src/app/shared/material-layout/services/feast-freedom-api.service';

@Component({
  selector: 'app-user-regsitration',
  templateUrl: './user-regsitration.component.html',
  styleUrls: ['./user-regsitration.component.css'],
  providers:[FeastFreedomApiService]
})
export class UserRegsitrationComponent implements OnInit {
  submitted = false;

  userForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private user: Router, private register:FeastFreedomApiService) { }

  ngOnInit() {
  }

  onSubmit(user) {
      return this.register.registerUser(user.value).subscribe((res:any) =>{
        this.user.navigateByUrl("/login")
      })
    
  }
}
