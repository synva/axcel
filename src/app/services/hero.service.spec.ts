import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { ApiService } from './api.service';
import { MockApiService } from './mock.api.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ApiService, useClass: MockApiService},
        HeroService
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
  it('should got hero', inject([HeroService], (service: HeroService) => {
    service.getHero().subscribe((data: any) => {
      expect(data.col).toEqual('mockget');
    });
  }));
});
