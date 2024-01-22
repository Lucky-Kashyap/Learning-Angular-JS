import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  headerName = 'Angular Tutorial';
  salary = 10000;

  ngOnInit(): void {}

  Functionclick(name:string){
    // console.log('Click Event');

    console.log(name);
    
    
  }
}
