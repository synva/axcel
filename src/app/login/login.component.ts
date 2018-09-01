import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public userService: UserService
  ) {
  }

  ngOnInit() {
  }

  register () {
    this.userService.register(authed => {
      if (authed) {
        this.toHome();
      }
    });
  }

  authenticate () {
    this.userService.authenticate(authed => {
      if (authed) {
        this.toHome();
      }
    });
  }

  toHome() {
    const params = this.router.parseUrl(this.router.url).queryParams;
    if (params && params.url) {
      this.router.navigate([params.url]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
