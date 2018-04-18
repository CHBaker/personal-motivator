import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
        <div class="col item">
            <div class="circle image" (click)="imageClick()">
                <i class="fa fa-image"></i>
                <i class="fa fa-plus"></i>
            </div>
        </div>
        <div class="col item">
            <div class="circle text"  (click)="textClick()">
                text
                <i class="fa fa-plus"></i>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
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
