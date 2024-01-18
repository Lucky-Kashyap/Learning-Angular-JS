import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  data = {
    name: 'Lucky',
    age: 22,
    work: 'Developer',
    locality: 'Jaipur',
  };
  x = 20;
  y = 30;
}
