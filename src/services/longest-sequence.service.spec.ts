import { TestBed } from '@angular/core/testing';

import { LongestSequenceService } from './longest-sequence.service';

describe('LongestSequenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    expect(service).toBeTruthy();
  });

  it('should be return ABAD when given ABAZDC and BACBAD', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    let result = service.getSequence("ABAZDC", "BACBAD");
    expect(result).toBe("ABAD");
  });

  /*
  it('should be return GTAB when given AGGTAB and GXTXAYB', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    let result = service.getSequence("AGGTAB", "GXTXAYB");
    expect(result).toBe("GTAB");
  });
  */

  it('should be return aa when given aaaaa and aa', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    let result = service.getSequence("aaaaa", "aa");
    expect(result).toBe("aa");
  });

  it('should be return ABBA when given ABBA and ABCABA', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    let result = service.getSequence("ABBA", "ABCBA");
    expect(result).toBe("ABBA");
  });

  it('findLonest should be return the longest array in a collection of arrays Test1', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    let sample = new Array(2);
    sample.fill(null);
    sample[0] = ["A", "B", "C"];
    sample[1] = ["A", "B"];
    let result = service.findLongest(sample);

    expect(result).toBe(sample[0]);
  });

  it('findLonest should be return the longest array in a collection of arrays Test2', () => {
    const service: LongestSequenceService = TestBed.get(LongestSequenceService);
    let sample = new Array(2);
    sample.fill(null);
    sample[0] = ["A", "B"];
    sample[1] = ["A", "B", "C"];
    let result = service.findLongest(sample);

    expect(result).toBe(sample[1]);
  });
});
