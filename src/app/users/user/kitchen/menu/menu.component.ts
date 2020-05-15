import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeastFreedomApiService } from '@app/shared/services/feast-freedom-api.service';

@Component({
  selector: 'menu-list',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private menu: FeastFreedomApiService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  menuList
  proceedToCart() {

  }
  ngOnInit() {
    // this.getMenu()
  }

  // getMenu() {
  //   this.activatedRoute.params.subscribe(params => {
  //     console.log(params)
  //     return this.menu.getMenuItems(params).subscribe((res) => {
  //       this.menuList = res
  //     })

  //   })
  // }

}
