import { Component } from '@angular/core';

@Component({
    selector: 'index-page',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.sass']
})

export class IndexPage {

    constructor() {
        console.log('load index page');
    }
}