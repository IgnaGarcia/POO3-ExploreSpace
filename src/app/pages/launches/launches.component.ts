import { Component } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from '../../services/spacex.service'

@Component({
    selector: 'launches-page',
    templateUrl: './launches.component.html',
    styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent {

    constructor(private _spaceXService: SpaceXService) {
        console.log('load launches page');
    }

    ngOnInit() {
        return this._spaceXService.getUpcomingLaunches().subscribe((res: Array<Launch>) => {
            console.log(res)
        })
    }
}