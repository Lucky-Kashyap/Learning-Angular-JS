import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formData = {
    email: '',
    password: '',
    confirm: '',
  };

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
