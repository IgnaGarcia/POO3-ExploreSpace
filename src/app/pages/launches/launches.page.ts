import { Component } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from '../../services/spacex.service'

@Component({
    selector: 'launches-page',
    templateUrl: './launches.page.html',
    styleUrls: ['./launches.page.sass']
})

export class LaunchesPage {

    constructor(private _spaceXService: SpaceXService) {
        console.log('load launches page');
    }

    ngOnInit() {
        return this._spaceXService.getUpcomingLaunches().subscribe((res: Array<Launch>) => {
            console.log(res)
        })
    }
}