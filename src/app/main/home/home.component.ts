import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';
import { HeroService } from '../../services/hero.service';

import { AxcelData } from '../../models/axcel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hero$: Observable<any>;
  datas: AxcelData[];

  constructor(
    private router: Router,
    private apiService: ApiService,
    public messageService: MessageService,
    public userService: UserService,
    private heroService: HeroService
  ) {
    this.datas = [];
    this.datas.push(new AxcelData({
      id: 'a',
      name: 'James',
      age: 28,
      sex: true,
      monthly: 3200,
      bonus: 5000,
      bank: 21000
    }));
    this.datas.push(new AxcelData({
      id: 'b',
      name: 'Marry',
      age: 24,
      sex: false,
      monthly: 5000,
      bonus: 12000,
      bank: 25000
    }));
    this.datas.push(new AxcelData({
      id: 'c',
      name: 'Lary',
      age: 29,
      sex: false,
      monthly: 3000,
      bonus: 5200,
      bank: 4000
    }));
    this.datas.push(new AxcelData({
      id: 'd',
      name: 'Tom',
      age: 32,
      sex: true,
      monthly: 5300,
      bonus: 12500,
      bank: 187000
    }));
  }

  ngOnInit() {
  }

  getData () {
    this.hero$ = this.heroService.getHero();
  }

  postData () {
    this.apiService.post('/public/postData', {input: 'testInput2'}).subscribe(response => {
      console.log('response:', JSON.stringify(response));
    });
  }

  logout () {
    this.userService.logout(() => {
      this.router.navigate(['/login']);
    });
  }
}
