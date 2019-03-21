import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

const ApiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class FeastFreedomApiService {

  constructor() { }

  Login = new Login()
  Register = new Register()
  Provider = new Provider()
  MenuItem = new MenuItem()
  Order = new Order()

}
class Login {
  private http: HttpClient

  loginUser(login_info) {
    let token = this.http.post(ApiUrl+'/api/login', login_info)
    return token;
  }
  loginProvider(login_info){
    let token = this.http.post(ApiUrl+'/api/provider/login', login_info)
    return token;
  }
}
class Provider {
  private http: HttpClient;
  getProviders(){
    return this.http.get(ApiUrl+'')
  }
  getProviderDetails(provider_id){
    return this.http.get(ApiUrl+'', provider_id)
  }
  updateProviderDetails(provider_details){
    this.http.put(ApiUrl+'', provider_details)
  }
}
class Register {
  private http: HttpClient
  newUser(new_user) {
    this.http.post(ApiUrl+'', new_user)
  }
  newProvider(new_provider) {
    this.http.post(ApiUrl+'', new_provider)
  }

}
class MenuItem {
  private http: HttpClient
  newMenuItem(new_menu) {
    this.http.post(ApiUrl+'',new_menu)
  }
  getMenuItem(provider_id) {
    return this.http.get(ApiUrl+'', provider_id)
  }

  deleteMenuItem(provider_id) {
    this.http.delete(ApiUrl+'', provider_id)
  }
  updateMenuItem(provider_id) {
    this.http.put(ApiUrl+'', provider_id)
  }
}
class Order {
  private http: HttpClient
  getOrders() {
    return this.http.get(ApiUrl+'')
  }
  getOrder(order_id) {
    return this.http.get(ApiUrl+'', order_id)
  }
  newOrder(new_order) {
    this.http.post(ApiUrl+'', new_order)
  }
}