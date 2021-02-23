import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'https://mylogin-panel.herokuapp.com/register';
  private loginUrl = 'https://mylogin-panel.herokuapp.com/login';
  constructor(private http: HttpClient, private router: Router) { }

  // tslint:disable-next-line: typedef
  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  // tslint:disable-next-line: typedef
  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  // tslint:disable-next-line: typedef
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // tslint:disable-next-line: typedef
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/event']);
  }

  // tslint:disable-next-line: typedef
  getToken() {
    return localStorage.getItem('token');
  }
}
