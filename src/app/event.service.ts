import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'http://localhost:3000/api/events';
  private specialEventUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getEvents() {
    return this.http.get<any>(this.eventUrl);
  }

  // tslint:disable-next-line: typedef
  getSpecialEvents() {
    return this.http.get<any>(this.specialEventUrl);
  }
}
