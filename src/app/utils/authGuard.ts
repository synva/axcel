import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.user.isAnonymous) return true;

    this.userService.login((authed) => {
      if (authed) {
        this.router.navigate([state.url]);
      } else {
        this.router.navigate(['/login'], {queryParams: {url: state.url}});
      }
    });

    return false;
  }
}
