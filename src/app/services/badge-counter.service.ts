import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeCounterService {
   private badgeCount = new BehaviorSubject<number>(0)

  constructor() { }

  setCount(newCount:number){
    this.badgeCount.next(newCount)
  }

  getCount(): Observable<number>{
    return this.badgeCount.asObservable()
  }
}
