import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  // standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HomeComponent, RouterModule],
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
