import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FeastFreedomApiService } from "../../../../../services/feast-freedom-api.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router:Router, 
    private getProvider: FeastFreedomApiService) { }

  providers_list = this.getProvider.getProviders();
  ngOnInit() {
  }

  onSelectProvider(provider_name){
    this.router.navigate([], provider_name)
  }
}
