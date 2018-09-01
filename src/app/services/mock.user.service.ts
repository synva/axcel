import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class MockUserService {
  public user: User;
  public sidebarOpen: Boolean;

  constructor() {
    this.user = new User({});
    this.sidebarOpen = false;
  }

  register(next) {
    this.user.login({_id: 'rrrr', password: 'rrrrrr'});
    next(true);
  }
  authenticate(next) {
    this.user.login({_id: 'rrrr', password: 'rrrrrr'});
    next(true);
  }
  login(next) {
    this.user.login({_id: 'rrrr', password: 'rrrrrr'});
    next(true);
  }
  logout(next) {
    this.user.logout();
    next();
  }
}
