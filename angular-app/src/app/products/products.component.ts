import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public product: any;

  public filterCategory: any;

  constructor(
    private apiService: ApiService,
    private cartService: CartserviceService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res) => {
      // console.log(res);
      this.product = res;
      this.filterCategory = res;
      this.product.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
        // Object.assign(a, { quantity: 1, total: a.price });
      });
      // console.log(this.product);
    });
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    // console.log(item);
  }

  filter(category: string) {
    this.filterCategory = this.product.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });

    // console.log('runs...');
    // console.log(this.filterCategory);
  }
}
