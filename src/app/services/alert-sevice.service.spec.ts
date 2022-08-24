import { TestBed } from '@angular/core/testing';

import { AlertSeviceService } from './alert-sevice.service';

describe('AlertSeviceService', () => {
  let service: AlertSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
