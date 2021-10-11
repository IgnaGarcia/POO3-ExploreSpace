import { Component } from '@angular/core';
import { Apod } from 'src/app/models/apod.model';
import { ApodService } from '../../services/apod.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'gallery-page',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    last_end: string;
    last_start: string;
    firstApod: Apod;
    safeURL: SafeUrl;
    gallery: Array<Apod>;

    constructor(private _apodService: ApodService, private sanitizer: DomSanitizer) {
        this.gallery = new Array<Apod>();
    }

    ngOnInit() {
        let today = Date.now()
        this.last_end = this.dateToString(new Date(today));
        this.last_start = this.dateToString(this.sub10Days(today));

        this._apodService.getApods(this.last_start, this.last_end)
            .subscribe((res: Array<Apod>) => {
                this.firstApod = res[res.length-1];
                
                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.getUrl());
                this.gallery.push(...res.slice(0, res.length-1))
            });
    }

    getUrl(): string {
        return this.firstApod.hdurl || this.firstApod.url;
    }

    sub10Days(end_date: number): Date {
        return new Date(end_date - (12 * 24 * 60 * 60 * 1000));
    }

    dateToString(date: Date): string {
        return date.toISOString().split('T')[0];
    }
}