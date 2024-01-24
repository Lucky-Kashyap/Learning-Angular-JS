import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent implements OnInit {

  productsId=-1;

 
  products:any;

  constructor(private route:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit(): void {
    this.productsId=Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getProductsById(this.productsId).subscribe((res) => {
      console.log(res);
      this.products = res;
    });

    // this.apiService.getData(this.productsId).then(data=>{
    //   // console.log(data);
      
    //   this.products=data;

    //   let {title,price,description,category,image,rating}= data;

    //   console.log(title);
    //   console.log(price);
      

    //   console.log(this.products);
      
    // })
  }

}
