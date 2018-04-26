import { Injectable } from '@angular/core';
import { ServiceBuilder } from 'selenium-webdriver/opera';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data Service connected...");
  }

  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .map(res => res.json());
      // return an 'observable' that must be mapped

  }

}
