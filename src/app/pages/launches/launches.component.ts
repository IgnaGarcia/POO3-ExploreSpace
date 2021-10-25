import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from '../../services/spacex.service'
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

//NTH: boton de activar recordatorio si es pendiente
//NTH: boton para traducir descripcion
@Component({
    selector: 'launches-page',
    templateUrl: './launches.component.html',
    styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent {
    launches: Array<Launch>;
    launch: Launch;
    cursor: number;
    safeURL: SafeUrl;

    constructor(private _spaceXService: SpaceXService, private sanitizer: DomSanitizer) { 
        this.launches = new Array<Launch>();
    }

    ngOnInit() {
        this._spaceXService.getPastLaunches().subscribe((past: Array<Launch>) => {
            this.launches.push(...past)
            this.cursor = this.launches.length - 1
            this.launch = this.launches[this.cursor]

            this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.launch.links.webcast);

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
            this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.launch.links.webcast);
        }
    }

    getPrevius() {
        if(this.hasPrevius()){
            this.cursor -= 1
            this.launch = this.launches[this.cursor]
            this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.launch.links.webcast);
        }
    }
}