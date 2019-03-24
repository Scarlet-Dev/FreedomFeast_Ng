import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { FeastFreedomApiService } from 'src/app/services/feast-freedom-api.service';

@Component({
  selector: 'app-user-regsitration',
  templateUrl: './user-regsitration.component.html',
  styleUrls: ['./user-regsitration.component.css'],
  providers:[FeastFreedomApiService]
})
export class UserRegsitrationComponent implements OnInit {
  serviceTest: any = [];
  submitted = false;

  userForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private user_route: Router, private register:FeastFreedomApiService) { }

  ngOnInit() {
  }

  onSubmit(user) {
      this.register.registerUser(user)
    // const value = user.value;
    // console.log(value);
    // this.user_route.navigateByUrl('login');
  }
}
