import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable'
import { environment } from '../../environments/environment'

const ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FeastFreedomApiService {

  constructor(private http: HttpClient) { }

  loginUser(){
    // return this.http.post(ApiUrl+'/login', )
  }

  checkUsers() {

  }
  //Regular User Registration
  newUser() {

  }


  //Provider Methods
  newMenu() {

  }
  getMenu(){

  }

  deleteMenu(){

  }
  updateMenu(){

  }

  //Provider Registration
  newProvider(data) {

  }

  getProviderDetails() {

  }

  getOrders(){

  }

  //Order
  newOrder(){

  }
  getOrder(){

  }
}
