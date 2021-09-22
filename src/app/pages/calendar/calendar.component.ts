import { Component } from '@angular/core';

@Component({
    selector: 'calendar-page',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

    constructor() {
        console.log('load calendar page');
    }
}