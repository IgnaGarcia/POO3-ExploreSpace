import { Component } from '@angular/core';
import { Explore } from '../../models/explore.model';
import { ExploreMock } from '../../mock/explore.mock';


//TODO: Titulo y descripcion principal
@Component({
    selector: 'explore-page',
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.scss']
})

export class ExploreComponent {
    list: Explore[] = ExploreMock

    constructor() { }
}