import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material-Module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private service: UserService) {}

  ngOnInit(): void {}

  RedirectRegister() {
    this.route.navigate(['access/register']);
  }

  ProceedLogin(logindata: any) {
    // console.log(logindata);

    // console.log(logindata.valid);
    console.log(logindata.value);

    // logindata = {};
  }
}
