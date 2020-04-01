import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { appConfig } from '../../shared/app-config.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sys_title = appConfig.sys_title;
  
  constructor(private router: Router) {}

  ngOnInit() {}
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/']);
  }
}
