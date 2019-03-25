import { MatTableDataSource } from "@angular/material";
import { Component, OnInit } from '@angular/core';

import { FeastFreedomApiService } from "../../../../services/feast-freedom-api.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  menu_items: MatTableDataSource<any>
  displayedColumns: string[] = ["Menu Item Name","Item Type", "Description", "Price", "Actions"]

  constructor(private menu: FeastFreedomApiService) { }

  
  ngOnInit() {
    return this.menu.getMenuItems("5c97e4dcc8c344595cfb337f")
    .subscribe( (list) => {

      console.log(list)
      // let array = list.map(item => {
      //   return {
      //     key: item.key,
      //     ...item.payload.val()
      //   }
      // })
      // this.menu_items = new MatTableDataSource(array)
    })
  }


}
