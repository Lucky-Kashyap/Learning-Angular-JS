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

  colorName = 'red';
  size = '2vw';

  // isDisabled=true;

  isDisabled = false;

  className = 'headclass';

  styleVal = {
    color: 'yellow',
    fontSize: '5vw',
  };

  ngOnInit(): void {}

  Functionclick(name: string) {
    // console.log('Click Event');

    console.log(name);
  }
}
