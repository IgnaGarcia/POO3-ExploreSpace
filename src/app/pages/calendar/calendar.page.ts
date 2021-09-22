import { Component } from '@angular/core';

@Component({
    selector: 'calendar-page',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.sass']
})

export class CalendarPage {

    constructor() {
        console.log('load calendar page');
    }
}