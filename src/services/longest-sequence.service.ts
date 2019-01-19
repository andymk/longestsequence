import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LongestSequenceService {

  constructor() { }

  getSequence(string1: string, string2: string, s1StartIdx: number = 0, s2StartIdx: number = 0):string {
    
    const results = [];

    for (let i = s1StartIdx; i < string1.length; i++) {

      const s1Char = string1[i];
      const s2Idx = string2.indexOf(s1Char, s2StartIdx);

      let result = [];

      if (s2Idx !== -1) {
        result.push(s1Char, this.getSequence(string1, string2, i + 1, s2Idx + 1));
      }

      results.push(result);
    }

    const longest = this.findLongest(results);
    return longest.join('');
  }

  findLongest(arr) {
    let longest = [];

    for (let candidate of arr) {
      if (candidate.length > longest.length) {
        longest = candidate;
      }
    }

    return longest;
  }
}
