import { Component } from '@angular/core';
import {AuthService} from './servises/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car-Service-App';
  public isLogged = false;
  public isLoggedOut = true;

  constructor( private auth: AuthService) {}

  public changeAuthStatus( status: string): any {
    if (status === 'login') {
      this.auth.logIn();
      this.isLogged = true;
      this.isLoggedOut = false;
    } else {
      this.auth.logOut();
      this.isLogged = false;
      this.isLoggedOut = true;
    }
  }
}
