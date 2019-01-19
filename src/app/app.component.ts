import { Component } from '@angular/core';
import { LongestSequenceService } from 'src/services/longest-sequence.service';
import { IResultRow } from 'src/model/IResultRow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  string1: string = "";
  string2: string = "";
  results: IResultRow[] = [];


  constructor(private longestSequenceService: LongestSequenceService) {}

  search() {
    let result = this.longestSequenceService.getSequence(this.string1, this.string2);
    let r = {} as IResultRow;
    r.string1 = this.string1;
    r.string2 = this.string2;
    r.result = result;
    this.results.push(r);
  }
}
