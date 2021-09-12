import { Component } from '@angular/core';

@Component({
    selector: 'galery-page',
    templateUrl: './galery.page.html',
    styleUrls: ['./galery.page.sass']
})

export class GaleryPage{

    constructor(){
        console.log('load galery page');
    }
}