import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LongestSequenceService {

  constructor() { }

  getSequence(string1: string, string2: string) {
    
    return string1 + ":" + string2;
  }
}
