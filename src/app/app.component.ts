import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageSelect = false;
  title = 'app';

  imageClick() {
    console.log(this.imageSelect);
    if (this.imageSelect) {
      this.imageSelect = false;
    } else {
      this.imageSelect = true;
    }
  }
}
