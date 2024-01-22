import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: ` <h2>404 Error. Requested page not Found..!!</h2> `,
  styles: ['h2{color:red;font-size:4vw}'],
})
export class StatusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
