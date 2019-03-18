import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isProvider=true;
  public imagesUrl;
  constructor(private router:Router) { }

  ngOnInit() {
    this.imagesUrl = [
      './assets/ab.jpg',
      //'IMAGE_URL1.jpg',
      './assets/aa.jpg',
      './assets/ac.jpg'
      ];
  }

  onUserClick(){
    this.router.navigate(['/register/:isProvider'])
  }

}
