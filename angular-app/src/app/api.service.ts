import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getProducts(){
    return this.httpClient.get('https://fakestoreapi.com/products');
  }

  constructor(private httpClient:HttpClient) { }
}
