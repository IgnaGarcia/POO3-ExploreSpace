import { Component } from '@angular/core';

import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from 'src/app/services/spacex.service';

//TODO: banner
//TODO: filtro de Eventos
//TODO: seccion de ultimo lanzamiento (horizontal)
//TODO: seccion de galeria (vertical)
//TODO: seccion de explorar espacio (vertical)
//TODO: menos eventos en el scroll(mas span)
@Component({
    selector: 'index-page',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    launches: Array<Launch>;

    constructor(private _spaceXService: SpaceXService) {
        this.launches = new Array<Launch>();
    }

    ngOnInit() {
        this._spaceXService.getUpcomingLaunches().subscribe((res: Array<Launch>) => this.launches.push(...res))
    }
}