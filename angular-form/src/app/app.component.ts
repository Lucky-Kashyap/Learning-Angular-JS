import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'JavaScript'];

  formData = {
    name: '',
    email: '',
    phone: '',
  };

  onSubmit(formhandle: NgForm) {
    // console.log(this.formData);

    console.log(formhandle);
  }
}
