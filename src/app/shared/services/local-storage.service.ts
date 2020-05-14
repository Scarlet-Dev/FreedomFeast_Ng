import { Inject, Injectable } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  STORAGE_KEY = "user_storage"
  current_storage

  constructor (@Inject(LOCAL_STORAGE)private storage:StorageService) { }

  public storageOnLocalStorage(username:String, token:any, isLogged:boolean):void{
    this.current_storage = this.storage.get(this.STORAGE_KEY) || []

    this.current_storage.push({
      user:username,
      token:token,
      Date:Date.now().toString,
      isLoggedIn:isLogged
    });

    this.storage.set(this.STORAGE_KEY, this.current_storage)
    console.log(this.storage.get(this.STORAGE_KEY) || 'Local storage is empty')
  }

  public clearStorage(){
    this.storage.clear()
  }
}
