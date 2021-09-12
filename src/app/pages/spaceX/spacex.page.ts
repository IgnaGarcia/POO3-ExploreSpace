import { Component } from '@angular/core';

@Component({
    selector: 'spaceX-page',
    templateUrl: './spacex.page.html',
    styleUrls: ['./spacex.page.sass']
})

export class SpaceXPage{

    constructor(){
        console.log('load spaceX page');
    }
}