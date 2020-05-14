import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BadgeCounterService } from './shared/services/badge-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BadgeCounterService]
})
export class AppComponent implements OnInit {
  title = 'Freedom Feast';
  itemCount = 0;

  constructor(private router: Router, private badgeCount: BadgeCounterService) {
  }

  getCount(){
    return this.badgeCount.getCount().subscribe(res =>{
      this.itemCount = res
    })
  }

  setCount(selected){
    this.badgeCount.setCount(selected)
  }

  ngOnInit() {
    this.getCount()
  }

  showButton: boolean

  logOut() {
    localStorage.clear()
    this.router.navigateByUrl('/')
  }
}
