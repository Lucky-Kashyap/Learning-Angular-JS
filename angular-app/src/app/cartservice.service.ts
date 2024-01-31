import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  setProduct(productList: any) {
    this.cartItemList.push(...productList);
    this.productList.next(productList);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

    this.getTotalPrice();
    // console.log(this.cartItemList);
  }

  constructor() {}

  getProducts() {
    // console.log(this.productList.asObservable());

    return this.productList.asObservable();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += Number(a.price.toFixed(2));
      // console.log(a.total);
    });

    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
