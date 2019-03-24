import { Component, OnInit } from '@angular/core';
import { FeastFreedomApiService } from '../../../../../services/feast-freedom-api.service';

@Component({
  selector: 'menu-list',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private getMenu: FeastFreedomApiService) { }

  menu = [this.getMenu.getMenuItems().subscribe()]
  
  proceedToCart(){
    
  }
  ngOnInit() {
  }

}
