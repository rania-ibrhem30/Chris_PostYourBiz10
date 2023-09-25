import { TestBed } from '@angular/core/testing';

import { ServicesListingService } from './services-listing.service';

describe('ServicesListingService', () => {
  let service: ServicesListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
