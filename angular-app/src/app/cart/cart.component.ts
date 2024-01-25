import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal !:number;
  

  constructor(private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products=res;
      // console.log(res);
      this.grandTotal = this.cartService.getTotalPrice();
     

      // console.log(this.grandTotal);
      
    })
  }

}
