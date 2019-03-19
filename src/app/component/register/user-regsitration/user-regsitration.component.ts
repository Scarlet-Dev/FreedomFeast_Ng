import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms'

@Component({
  selector: 'app-user-regsitration',
  templateUrl: './user-regsitration.component.html',
  styleUrls: ['./user-regsitration.component.css']
})
export class UserRegsitrationComponent implements OnInit {
  serviceTest: any = [];
  submitted = false;
  questions = ['What is the name of your First School?', 'What is your pet Name?']
  userForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(userForm) {
    // this.uservice.getUsers(userForm.value);
  }
  Sub(): void {
    this.submitted = true;
    console.log(this.submitted);
  }
}
