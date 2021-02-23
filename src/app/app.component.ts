import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-Panel';
  authServicee: AuthService;
  constructor(authService: AuthService) {
    this.authServicee = authService;
  }
}
