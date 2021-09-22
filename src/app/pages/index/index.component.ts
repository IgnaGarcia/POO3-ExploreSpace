import { Component } from '@angular/core';

@Component({
    selector: 'index-page',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent {

    constructor() {
        console.log('load index page');
    }
}