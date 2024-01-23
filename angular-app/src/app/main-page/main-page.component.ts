import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


    products:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getProducts().subscribe((data)=>{
      // console.log(data);
      this.products= data;
      
    })
  }

}
