import { TestBed } from '@angular/core/testing';

import { InformationrequestService } from './informationrequest.service';

describe('InformationrequestService', () => {
  let service: InformationrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
