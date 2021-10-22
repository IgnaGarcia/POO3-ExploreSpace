import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
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
    launch: Launch;
    cursor: number;

    constructor(private _spaceXService: SpaceXService) { 
        this.launches = new Array<Launch>();
    }

    ngOnInit() {
        this._spaceXService.getPastLaunches().subscribe((past: Array<Launch>) => {
            this.launches.push(...past)
            this.cursor = this.launches.length - 1
            this.launch = this.launches[this.cursor]

            this._spaceXService.getUpcomingLaunches().subscribe((upcoming: Array<Launch>) => {
                this.launches.push(...upcoming)
            })
        })
    }

    hasNext() {
        return this.launches.length > (this.cursor + 1)
    }

    hasPrevius() {
        return 0 <= (this.cursor - 1)
    }

    getNext() {
        if(this.hasNext()){
            this.cursor += 1
            this.launch = this.launches[this.cursor]
        }
    }

    getPrevius() {
        if(this.hasPrevius()){
            this.cursor -= 1
            this.launch = this.launches[this.cursor]
        }
    }
}