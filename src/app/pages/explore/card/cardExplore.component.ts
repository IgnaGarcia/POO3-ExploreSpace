import { Component, Input } from '@angular/core';
import { Explore } from 'src/app/models/explore.model';

@Component({
    selector: 'card-explore',
    templateUrl: './cardExplore.component.html',
    styleUrls: ['./cardExplore.component.scss']
})

export class CardExploreComponent {
    @Input() explore: Explore;
    basePath: string = '../../../../'

    constructor() { }
}