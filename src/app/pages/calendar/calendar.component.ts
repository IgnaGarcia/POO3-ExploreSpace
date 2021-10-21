import { Component } from '@angular/core';

import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from 'src/app/services/spacex.service';

//TODO: lanzamientos on click abra Pagina
//NTH: texto lindo de calendario
//NTH: integracion con notification api, boton de notificaciones
//NTH: agregar eventos astronomicos
//NTH: filtro por tipos, ordenamiento por fecha

@Component({
    selector: 'calendar-page',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
    launches: Array<Launch>;

    constructor(private _spaceXService: SpaceXService) { 
        this.launches = new Array<Launch>();
    }

    ngOnInit() {
        this._spaceXService.getUpcomingLaunches().subscribe((res: Array<Launch>) => this.launches.push(...res))
    }
}