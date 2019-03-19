import { Component, OnInit, Input } from '@angular/core';
// import { FeastFreedomApiService } from '../../../services/feast-freedom-api.service'
import { HttpClient } from '@angular/common/http'
import { FormGroup, Form } from '@angular/forms'

@Component({
  selector: 'app-provider-regsitration',
  templateUrl: './provider-regsitration.component.html',
  styleUrls: ['./provider-regsitration.component.css'],
  // providers: [ 
  //   FeastFreedomApiService
  //  ]
})
export class ProviderRegsitrationComponent implements OnInit {
  submitted = false;
  selectedFile: File = null;
  questions = ['What is the name of your First School?', 'What is your pet Name?']
  states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM',
    'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA',
    'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV',
    'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW',
    'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
    'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];

  @Input('group')
  public addressForm: FormGroup;
  
  constructor(private prov_http:HttpClient) { }

  ngOnInit() {
  }
/* 
  onSubmit(providerForm) {
    this.api_service.newProvider(providerForm.value);
    private api_service:FeastFreedomApiService 
  }*/
  

}
