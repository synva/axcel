import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class MessageService {
  public messages = null;

  constructor(private apiService: ApiService) {
  }

  async getMessage() {
    await this.apiService.get('/public/getData').toPromise().then(data => {
      this.messages = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
