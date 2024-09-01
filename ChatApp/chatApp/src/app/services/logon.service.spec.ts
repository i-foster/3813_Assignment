import { TestBed } from '@angular/core/testing';

import { LogonService } from './logon.service';

describe('LogonService', () => {
  let service: LogonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
