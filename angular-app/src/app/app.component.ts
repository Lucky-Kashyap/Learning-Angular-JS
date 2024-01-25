import { Component } from '@angular/core';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public totalItem : number = 0;
  constructor(private cartService:CartserviceService){}

  ngOnInit():void{
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  title = 'angular-app';
}
