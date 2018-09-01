import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable()
export class UserService {
  public user: User;
  public sidebarOpen: Boolean;

  constructor(private apiService: ApiService) {
    this.user = new User({});
    this.sidebarOpen = false;
  }

  register(next) {
    if (!this.user.isAnonymous) this.user.logout();
    this.apiService.post('/register', {user: {_id: 'rrrr', password: 'rrrrrr'}}).subscribe((data: any) => {
      this.authenticate(next);
    });
  }
  authenticate(next) {
    if (!this.user.isAnonymous) return;
    this.apiService.post('/authenticate', {username: 'rrrr', password: 'rrrrrr'}).subscribe((data: any) => {
      if (data && data.user) {
        this.user.login(data.user);
        next(true);
      } else {
        next(false);
      }
    });
  }
  login(next) {
    if (!this.user.isAnonymous) return;
    this.apiService.get('/login').subscribe((data: any) => {
      if (data && data.user) {
        this.user.login(data.user);
        next(true);
      } else {
        next(false);
      }
    });
  }
  logout(next) {
    if (this.user.isAnonymous) return;
    this.apiService.get('/logout').subscribe(data => {
      this.user.logout();
      next();
    });
  }
}
