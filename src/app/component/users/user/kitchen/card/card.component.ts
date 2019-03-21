import { Component, OnInit } from '@angular/core';
import { FeastFreedomApiService } from "../../../services/feast-freedom-api.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private getProvider: FeastFreedomApiService) { }

  providers_list = this.getProvider.Provider.getProviders();
  ngOnInit() {
  }

}
