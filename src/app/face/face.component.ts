import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styles: []
})
export class FaceComponent implements OnInit {
    emotion = null;
    response = null;

  constructor() { }

  ngOnInit() {
  }

}
