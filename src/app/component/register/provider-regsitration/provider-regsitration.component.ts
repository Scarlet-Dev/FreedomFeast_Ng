import { Component, OnInit, Input } from '@angular/core';
import { FeastFreedomApiService } from '../../../services/feast-freedom-api.service'
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'

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
  
  
  addressForm = new FormGroup({
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl()
  });

  daysOftheWeekGroup = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  providerForm = new FormGroup({
    providerName: new FormControl(),
    ownerNames: new FormControl(),
    providerUsername: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: this.addressForm,
    DoW: new FormControl([]),
    time_opened: new FormControl()
  });


  constructor(private router: Router, private register:FeastFreedomApiService) { }

  ngOnInit() {
  }

  onSubmit(new_provider) {
    // this.register.registerProvider(new_provider).subscribe()
    // this.prov_http.navigate([''])
    console.log(new_provider)
    // this.router.navigate([])
  }
}
