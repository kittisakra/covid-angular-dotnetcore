import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member, RegisterResponse, LoginResponse } from '../models/member.model';
import { Observable } from 'rxjs';

// class services
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) {

  }

  register(member: Member): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>("https://localhost:5001/api/auth/register", member);
  }

  login(member: Member): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>("https://localhost:5001/api/auth/login", member);
  }

  getProducts() {
    this.httpClient.get("https://localhost:5001/api/product").subscribe(
      reponse => {
        alert(reponse)
      },
      error => {
        alert(error)
      })
  }
}
