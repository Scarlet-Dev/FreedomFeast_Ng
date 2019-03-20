import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-regsitration',
  templateUrl: './user-regsitration.component.html',
  styleUrls: ['./user-regsitration.component.css']
})
export class UserRegsitrationComponent implements OnInit {
  serviceTest: any = [];
  submitted = false;

  userForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private user_route: Router) { }

  ngOnInit() {
  }

  onSubmit(userForm) {
    console.log(userForm);
    this.user_route.navigateByUrl('login');
  }
}
