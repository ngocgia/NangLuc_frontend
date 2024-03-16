import { TestBed } from '@angular/core/testing';

import { PhieuService } from '../services/phieu.service';

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
