import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Angular2FontawesomeModule } from "angular2-fontawesome/angular2-fontawesome";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { FaceComponent } from "./face/face.component";
import { TextComponent } from "./text/text.component";
import { CannedResponseService } from "./cannedresponses/cannedresponse.service";
import { ResultsComponent } from "./results/results.component";
import { motivatorRoutes } from "./router/app.router";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        AppComponent,
        FaceComponent,
        TextComponent,
        ResultsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(motivatorRoutes),
        Angular2FontawesomeModule,
        HttpModule
    ],
    providers: [CannedResponseService],
    bootstrap: [AppComponent]
})
export class AppModule {}
