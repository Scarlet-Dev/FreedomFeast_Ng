import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isProvider = true;
  public imagesUrl;
  constructor(private router: Router) { }

  ngOnInit() {
    this.imagesUrl = [
      './assets/Custom_Cheese_homepage.jpg',
      //'IMAGE_URL1.jpg',
      './assets/food1.jpg',
      './assets/Homepage_pepperoni.jpg',
      './assets/Peak_homepage.jpg',
      './assets/Pmobile_homepage.jpg',
      './assets/Spark_homepage.jpg'
    ]
  }

  onUserClick() {
    this.router.navigate(['/register/:isProvider'])
  }

}
