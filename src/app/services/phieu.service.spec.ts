import { TestBed } from '@angular/core/testing';

import { PhieuService } from './phieu.service';

describe('PhieuService', () => {
  let service: PhieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
