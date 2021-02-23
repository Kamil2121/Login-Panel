import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl = 'https://mylogin-panel.herokuapp.com/api/events';
  private specialEventUrl = 'https://mylogin-panel.herokuapp.com/api/special';

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
