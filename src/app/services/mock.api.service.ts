import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MockApiService {

  constructor() {
  }

  get (api, params = {}) {
    const apiObservable = new Observable((observer) => {
      if (api === '/public/getData') {
        observer.next({col: 'mockget'});
        observer.complete();
      }
    });
    return apiObservable;
  }

  post (api, params = {}) {
    const apiObservable = new Observable((observer) => {
      if (api === '/public/postData') {
        observer.next({col: 'mockpost'});
        observer.complete();
      }
    });
    return apiObservable;
  }

}
