import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyLocalAuthenInfo = environment.keyLocalAuthenInfo;

  constructor(private router: Router) { }

  getToken(): string {
    return localStorage.getItem(this.keyLocalAuthenInfo);
  }

  setToken(token: string) {
    localStorage.setItem(this.keyLocalAuthenInfo, token);
  }

  logout() {
    localStorage.clear();
    //localStorage.removeItem(this.keyLocalAuthenInfo);
    this.router.navigate(["login"]);
  }
}


