import { TestBed } from '@angular/core/testing';

import { DispenseService } from './dispense.service';

describe('DispenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispenseService = TestBed.get(DispenseService);
    expect(service).toBeTruthy();
  });
});
