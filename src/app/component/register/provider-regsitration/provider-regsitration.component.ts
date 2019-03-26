import { Component, OnInit, Input } from '@angular/core';
import { FeastFreedomApiService } from '../../../services/feast-freedom-api.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-provider-regsitration',
  templateUrl: './provider-regsitration.component.html',
  styleUrls: ['./provider-regsitration.component.css'],
  providers: [FeastFreedomApiService]
})
export class ProviderRegsitrationComponent implements OnInit {
  submitted = false;
  selectedFile: File = null;
  questions = ['What is the name of your First School?', 'What is your pet Name?']

  // @Input('group')

  states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
    'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
    'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
    'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW',
    'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
    'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];


  daysOftheWeekGroup = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  providerForm = new FormGroup({
    providerInfo: new FormGroup({
      providerName: new FormControl(""),
      ownerNames: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
    }),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl("")
    }),
    workingDays: new FormGroup({
      daysOpened: new FormControl([""]),
      timeOpened: new FormControl([""]),
      timeClosed: new FormControl([""])
    }),
  });


  constructor(private router: Router, private formBuilder: FormBuilder, private register: FeastFreedomApiService) { }

  ngOnInit() {
    // this.providerForm = this.formBuilder.group({

    // })
  }

  onSubmit(provider: any) {
    console.log(provider)
    // this.register.registerProvider(provider).subscribe((res) => {
    //   this.router.navigateByUrl('/login')
    // })
    // console.log()
  }
}
