import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators'

import { User } from "../models/auth/user";
import { Provider } from "../models/auth/provider"
import { JwtResponse } from "../models/auth/jwt-response";

import { environment } from '../../environments/environment'

const ApiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class FeastFreedomApiService {

  constructor(private http: HttpClient) { }

  //Login Methods
  loginUser(user: User) {
    return this.http.post(ApiUrl + 'login/user', user)
  }

  loginProvider(provider: Provider) {
    return this.http.post(ApiUrl + 'login/provider', provider)
  }

  logOut() {
    localStorage.clear()
  }

  //Register Methods
  registerUser(new_user: User) {
    return this.http.post(ApiUrl + 'register/user', new_user)
  }
  registerProvider(new_provider: Provider) {
    return this.http.post(ApiUrl + 'register/provider', new_provider)
  }


  //Provider Methods
  getProviders() {
    return this.http.get(ApiUrl + 'provider')
  }
  // getProviderDetails() {
  //   return this.http.get(ApiUrl + 'provider/:id=', provider.id)
  // }
  updateProviderDetails(provider_id, provider_details) {
    this.http.put(ApiUrl + 'provider?id='+provider_id, provider_details)
  }

  //Menu Methods
  getMenuItems(provider_id) {
    return this.http.get(ApiUrl + 'provider/menu?id=' + provider_id)
  }
  getMenuItem(provider_id) {
    return this.http.get(ApiUrl + 'provider/menu?id=', provider_id)
  }
  newMenuItem(provider_id, menu_item) {
    return this.http.post(ApiUrl + 'provider/menu?id=' + provider_id, menu_item)
  }
  updateMenuItem(provider_id, menu_item) {
    return this.http.put(ApiUrl + 'provider/menu?id='+provider_id, menu_item)
  }
  deleteMenuItem(provider_id, menu_item) {
    return this.http.delete(ApiUrl + 'provider/menu?id='+provider_id, menu_item)
  }

  //Orders Methods
  newOrder(new_order) {
    this.http.post(ApiUrl + '', new_order)
  }
  getOrders() {
    return this.http.get(ApiUrl + '')
  }
  getOrder(order_id) {
    return this.http.get(ApiUrl + '', order_id)
  }
}
