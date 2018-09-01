import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { ApiService } from './api.service';
import { MockApiService } from './mock.api.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ApiService, useClass: MockApiService},
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
