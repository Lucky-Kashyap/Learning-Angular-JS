import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public getProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }


  public getProductsById(id: number) {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`);
  }

  // async getData(id:number){
  //   const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  //   const res = await data.json();

  //   let {title,price,description,category,image,rating}= res;

  //   return res;
  // }

  constructor(private httpClient: HttpClient) { }
}
