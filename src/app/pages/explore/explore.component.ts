import { Component } from '@angular/core';
import { Explore } from '../../models/explore.model';
import { ExploreMock } from '../../mock/explore.mock';

@Component({
    selector: 'explore-page',
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.scss']
})

export class ExploreComponent {
    list: Explore[] = ExploreMock

    constructor() { }
}