import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment'

const ApiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class FeastFreedomApiService {

  constructor(private http: HttpClient) { }
  //Include Local Storage Token when in use


  loginUser(login_info) {
    let token = this.http.post(ApiUrl + 'user/login', login_info)
    return token;
  }
  loginProvider(login_info) {
    let token = this.http.post(ApiUrl + '/provider/login', login_info)
    return token;
  }

  registerUser(new_user) {
    this.http.post(ApiUrl + 'register/new_user', new_user)
  }
  registerProvider(new_provider) {
    return this.http.post(ApiUrl + 'register/new_provider', new_provider)
  }
  

  getProviders() {
    return this.http.get(ApiUrl + 'provider/')
  }
  getProviderDetails(provider_id) {
    return this.http.get(ApiUrl + 'provider/:id=', provider_id)
  }
  updateProviderDetails(provider_details) {
    this.http.put(ApiUrl + 'provider/:id=', provider_details)
  }


  newMenuItem(new_menu) {
    this.http.post(ApiUrl + '', new_menu)
  }
  getMenuItems() {
    return this.http.get(ApiUrl + '')
  }
  getMenuItem(provider_id) {
    return this.http.get(ApiUrl + '', provider_id)
  }
  deleteMenuItem(provider_id) {
    this.http.delete(ApiUrl + '', provider_id)
  }
  updateMenuItem(provider_id) {
    this.http.put(ApiUrl + '', provider_id)
  }


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
