import { Component } from '@angular/core';
import { LongestSequenceService } from 'src/services/longest-sequence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  string1: string = "";
  string2: string = "";

  constructor(private longestSequenceService: LongestSequenceService) {}

  search() {
    let result = this.longestSequenceService.getSequence(this.string1, this.string2);
    console.log(result);
  }
}
