import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MockHeroService {

  constructor() {
  }

  getHero(): Observable<any> {
    const heroObservable = new Observable((observer) => {
      observer.next({col: 'mockHero'});
      observer.complete();
    });
    return heroObservable;
  }

}
