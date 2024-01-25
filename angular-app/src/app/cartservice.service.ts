import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

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

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
}
