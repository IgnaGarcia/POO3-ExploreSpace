import { Component } from '@angular/core';

import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from 'src/app/services/spacex.service';

//TODO: lista que tenga mas filas
//TODO: lanzamientos on click abra Pagina
//TODO: filtro por tipos, ordenamiento por fecha
//TODO: integracion con notification api
//TODO: agregar eventos astronomicos
//TODO: Cabecera, algun texto y boton de notificaciones
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