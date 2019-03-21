import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

const ApiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class FeastFreedomApiService {
  
  constructor(private http: HttpClient) { }

  
  
}

class Login{
  loginUser() {
  }
}

class Provider {

}
class Register {

  newUser() {

  }

  newProvider(data) {

  }

}
class MenuItem {

  newMenuItem() {

  }
  getMenuItem() {

  }

  deleteMenuItem() {

  }
  updateMenuItem() {

  }
}

class Order {
  getOrders() {

  }

  newOrder() {

  }
  getOrder() {

  }
}