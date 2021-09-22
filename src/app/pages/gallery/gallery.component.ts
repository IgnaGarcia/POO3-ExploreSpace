import { Component } from '@angular/core';
import { Apod } from 'src/app/models/apod.model';
import { ApodService } from '../../services/apod.service'

@Component({
    selector: 'gallery-page',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    last_end: string;
    last_start: string;
    gallery: Array<Apod>;

    constructor(private _apodService: ApodService) {
        this.gallery = new Array<Apod>();
    }

    ngOnInit() {
        let today = Date.now()
        this.last_end = this.dateToString(new Date(today));
        this.last_start = this.dateToString(this.sub10Days(today));

        return this._apodService.getApods(this.last_start, this.last_end)
            .subscribe((res: Array<Apod>) => this.gallery.push(...res));
    }

    sub10Days(end_date: number): Date {
        return new Date(end_date - (11 * 24 * 60 * 60 * 1000));
    }

    dateToString(date: Date): string {
        return date.toISOString().split('T')[0];
    }
}