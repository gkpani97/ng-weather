import { TestBed } from '@angular/core/testing';

import { WeatherFetchService } from './weather-fetch.service';

describe('WeatherFetchService', () => {
  let service: WeatherFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
