// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  // constructor(public http: HttpClient) {
  constructor() {
    console.log('Hello DatabaseProvider Provider');
  }

  public data = "I am a piece of data from the Database"
  
}
