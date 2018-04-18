import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoiceComponent } from './voice/voice.component';
import { FaceComponent } from './face/face.component';


@NgModule({
  declarations: [
    AppComponent, VoiceComponent, FaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
