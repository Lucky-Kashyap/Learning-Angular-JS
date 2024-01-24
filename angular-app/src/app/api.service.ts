import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  title='';
  price=0;
  description='';
  category='';
  image='';
  rating=0;

  public getProducts(){
    return this.httpClient.get('https://fakestoreapi.com/products');
  }

  async getData(id:number){
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await data.json();

    let {title,price,description,category,image,rating}= res;

    return res;
  }

  constructor(private httpClient:HttpClient) { }
}
