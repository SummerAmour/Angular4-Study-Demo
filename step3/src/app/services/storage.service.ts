import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  //存数据
  setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }
  //获取数据
  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }
  //移除数据
  removeItem(key){
    localStorage.removeItem(key);
  }

}
