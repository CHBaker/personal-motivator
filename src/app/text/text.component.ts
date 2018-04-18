import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Component({
    selector: "app-text",
    templateUrl: "./text.component.html",
    styleUrls: ["./text.component.css"]
})
export class TextComponent implements OnInit {
    showModal = false;
    constructor(private http: Http) {}

    ngOnInit() {}

    analyze(val) {
        console.log(val);
    }

    private post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.textApiKey}`,
            JSON.stringify(body)
        );
    }
}
