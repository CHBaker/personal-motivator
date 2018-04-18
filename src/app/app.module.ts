import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { TextComponent } from './text/text.component';
import { CannedResponseService } from './cannedresponses/cannedresponse.service';


@NgModule({
  declarations: [
    AppComponent, FaceComponent, TextComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
  ],
  providers: [CannedResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
