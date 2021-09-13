import { Component } from '@angular/core';
import { Apod } from 'src/app/models/apod.model';
import { ApodService } from '../../services/apod.service'

@Component({
    selector: 'galery-page',
    templateUrl: './galery.page.html',
    styleUrls: ['./galery.page.sass']
})

export class GaleryPage{
    last_end: string
    last_start: string


    constructor(private _apodService: ApodService){
        console.log('load galery page');
    }

    ngOnInit() {
        let today = Date.now()
        this.last_end = this.dateToString(new Date(today))
        this.last_start = this.dateToString(this.sub10Days(today))

        console.log(this.last_start, this.last_end);
        return this._apodService.getApods(this.last_start, this.last_end).subscribe((res: Array<Apod>) => {
            console.log(res)
        })
    }

    sub10Days(end_date: number): Date {
        return new Date(end_date - (10 * 24 * 60 * 60 * 1000));
    }

    dateToString(date: Date): string {
        return date.toISOString().split('T')[0];
    }
}