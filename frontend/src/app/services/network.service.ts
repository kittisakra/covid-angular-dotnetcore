import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// class services
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) {

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
