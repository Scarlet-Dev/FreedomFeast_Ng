import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FeastFreedomApiService } from "../../../../../shared/material-layout/services/feast-freedom-api.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router:Router, 
    private provider: FeastFreedomApiService) { }

  providers_list;

  getProviders(){
    this.provider.getProviders().subscribe((res:any) =>{
      this.providers_list = res
      console.log(this.providers_list)
    })
  }

  goToMenu(){
    this.router.navigateByUrl("menu")
  }

  ngOnInit() {
    this.getProviders()
  }
}
