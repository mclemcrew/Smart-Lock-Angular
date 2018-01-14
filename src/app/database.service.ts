import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {
  constructor(private http: Http) {}
  storeData(date: Date,status: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://smartlock-valpo.firebaseio.com/data.json',
      {Date: date, Status: status},
      {headers: headers});
  }
  getData() {
    return this.http.get('https://smartlock-valpo.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          // console.log(data);
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  getAppName() {
    return this.http.get('https://smartlock-valpo.firebaseio.com/applicationdata.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
