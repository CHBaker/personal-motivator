import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  imageClick() {
    this.router.navigate(['/face']);
  }

  textClick() {
    this.router.navigate(['/text']);
  }
}
