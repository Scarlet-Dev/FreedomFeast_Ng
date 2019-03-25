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
  //Include Local Storage Token when in use

  authSubject = new BehaviorSubject(false)

  //Login Methods
  loginUser(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(ApiUrl + 'login/user/', user).pipe(
      tap((res: JwtResponse) => {

        if (res.user) {
          localStorage.setItem("id", res.user.id)
          localStorage.setItem("email", res.user.email)
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token)
          localStorage.setItem("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true)
        }
      })
    );
  }
  loginProvider(provider: Provider): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(ApiUrl + 'login/provider/', provider).pipe(
      tap((res: JwtResponse) => {

        if (res.provider) {
          localStorage.setItem("id", res.provider.id);
          localStorage.setItem("name", res.provider.name);
          localStorage.setItem("email", res.provider.email);
          localStorage.setItem("ACCESS_TOKEN", res.provider.access_token);
          localStorage.setItem("EXPIRES_IN", res.provider.expires_in);
          this.authSubject.next(true)
        }
      })
    );
  }
  logOut() {
    localStorage.removeItem("id")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
    this.authSubject.next(false)
  }

  //Register Methods
  registerUser(new_user: User): Observable<JwtResponse> {
    return this.http.post(ApiUrl + 'register/new_user', new_user).pipe(
      tap((res: JwtResponse) => {
        if (res.user) {
          localStorage.setItem("id", res.user.id)
          localStorage.setItem("email", res.user.email)
          localStorage.setItem("ACCESS_TOKEN", res.user.access_token)
          localStorage.setItem("EXPIRES_IN", res.user.expires_in)
        }
      })
    )
  }
  registerProvider(new_provider: Provider): Observable<JwtResponse> {
    return this.http.post(ApiUrl + 'register/new_provider', new_provider).pipe(
      tap((res: JwtResponse) => {
        if (res.provider) {
          localStorage.setItem("id", res.provider.id);
          localStorage.setItem("name", res.provider.name);
          localStorage.setItem("email", res.provider.email);
          localStorage.setItem("ACCESS_TOKEN", res.provider.access_token);
          localStorage.setItem("EXPIRES_IN", res.provider.expires_in);
          this.authSubject.next(true)
        }
      })
    )
  }

  //Provider Methods
  getProviders() {
    return this.http.get(ApiUrl + 'provider/')
  }
  // getProviderDetails(provider: Provider) {
  //   return this.http.get(ApiUrl + 'provider/:id=', provider.id)
  // }
  updateProviderDetails(provider_details) {
    this.http.put(ApiUrl + 'provider/:id=', provider_details)
  }

  //Menu Methods
  newMenuItem(provider_id, menu_item) {
    this.http.post(ApiUrl + 'provider/menu?id=' + provider_id, menu_item)
  }
  getMenuItems(provider_id) {
    return this.http.get(ApiUrl + 'provider/menu?id='+provider_id)
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

  isAuthenticated() {
    return this.authSubject.asObservable();
  }
}
