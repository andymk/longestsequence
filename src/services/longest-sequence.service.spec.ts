import { TestBed } from '@angular/core/testing';

import { LongestSequenceService } from './longest-sequence.service';

describe('LongestSequenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    expect(service).toBeTruthy();
  });
});
