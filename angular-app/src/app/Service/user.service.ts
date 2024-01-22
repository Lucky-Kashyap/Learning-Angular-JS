import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private route: Router) {}

  ProceedLogin(logindata: any) {
    if (logindata.valid) {
      localStorage.setItem('token', logindata.value);
      this.route.navigate(['home']);
    } else {
      alert('login failed');
    }
  }
}
