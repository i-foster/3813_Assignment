import { TestBed } from '@angular/core/testing';

import { CleanstringService } from './cleanstring.service';

describe('CleanstringService', () => {
  let service: CleanstringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanstringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
