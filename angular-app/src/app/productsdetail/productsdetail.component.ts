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

  // products:products|undefined;
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productsId=Number(this.route.snapshot.paramMap.get('id'));

    
  }

}
