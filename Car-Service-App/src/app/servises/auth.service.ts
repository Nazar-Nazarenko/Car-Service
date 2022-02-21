import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public  isLoggedIn = false;

  isAuth(): any {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  constructor() { }

  public logIn(): void {
    this.isLoggedIn = true;
  }

  public logOut(): void {
    this.isLoggedIn = false;
  }
}
