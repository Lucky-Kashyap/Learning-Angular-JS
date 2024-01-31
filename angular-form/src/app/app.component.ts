import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'JavaScript'];

  // formData = {
  //   name: '',
  //   email: '',
  //   phone: '',
  // };

  userModel = new User(
    'John',
    'john@testgmail.com',
    8978987778,
    '',
    'morning',
    true
  );

  onSubmit(formhandle: NgForm) {
    // console.log(this.formData);

    // console.log(formhandle);
    console.log(formhandle.value);
  }
}
