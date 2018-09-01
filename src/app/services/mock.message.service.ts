import { Injectable } from '@angular/core';

@Injectable()
export class MockMessageService {
  public messages = null;

  constructor() {
    this.messages = {col: 'fortest'};
  }

}
