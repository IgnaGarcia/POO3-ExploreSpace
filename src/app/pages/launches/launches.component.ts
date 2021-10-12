import { Component } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from '../../services/spacex.service'

//TODO: lista de imagenes
//TODO: imagen/video principal
//TODO: botones de navegacion del array
//TODO: Descripcion principal
//TODO: cards de tecnologias
//TODO: cads de tripulacion
//TODO: boton de activar recordatorio si es pendiente
//TODO: boton para traducir descripcion
@Component({
    selector: 'launches-page',
    templateUrl: './launches.component.html',
    styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent {
    launches: Array<Launch>;
    lastLaunch: Launch;

    constructor(private _spaceXService: SpaceXService) { 
        console.log("load launches page")
        this.launches = new Array<Launch>();
    }

    ngOnInit() {
        this._spaceXService.getUpcomingLaunches().subscribe((res: Array<Launch>) => this.launches.push(...res))
        this._spaceXService.getLatestLaunches().subscribe((res: Launch) => this.lastLaunch = res)
    }
}