import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
    // emotion
    @Input('emotion') emotion: string;
    // canned response
    @Input('response') response: string;
}
