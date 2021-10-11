import { Component, Input } from '@angular/core';
import { Apod } from 'src/app/models/apod.model';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'apod-component',
    templateUrl: './apod.component.html',
    styleUrls: ['./apod.component.scss']
})
export class ApodComponent {
    @Input() apod: Apod;
    safeURL : SafeUrl;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.getUrl());
    }

    getUrl(): string {
        return this.apod.hdurl || this.apod.url;
    }
}