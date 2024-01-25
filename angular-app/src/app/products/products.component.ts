import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  product: any;

  constructor(private apiService: ApiService,private cartService:CartserviceService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((res) => {
      // console.log(res);
      this.product = res;
    });
  }

  addToCart(item:any){
    this.cartService.addToCart(item);
    console.log(item);
    
  }
}
