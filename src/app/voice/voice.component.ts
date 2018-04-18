import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VoiceService } from './voice.service';

@Component({
  selector: 'voice-component',
  styleUrls: ['voice.component.css'],
  templateUrl: 'voice.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoiceComponent implements OnInit {

  constructor(private voiceService: VoiceService) { }

  ngOnInit() {
  }
}
