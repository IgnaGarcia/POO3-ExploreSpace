import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SpaceXService } from 'src/app/services/spacex.service';

import { Company } from 'src/app/models/company.model';
import { StarLink } from 'src/app/models/starlink.model';
import { Crew } from 'src/app/models/crew.model';
import { Rocket } from 'src/app/models/rocket.model';
import { Dragon } from 'src/app/models/dragon.model';
import { Base } from 'src/app/models/base.model';

//NTH: boton de ver calendario con filtro de solo lanzamientos incluidos 
//NTH: traducciones de lo que sea necesario
//REVIEW: responsive banner
//REVIEW: texto y video sobre starlink
@Component({
    selector: 'spaceX-page',
    templateUrl: './spacex.component.html',
    styleUrls: ['./spacex.component.scss']
})
export class SpaceXComponent {
    company: Company;
    inactiveStarlink: StarLink;
    activeStarlink: StarLink;
    bases: Array<Base>;
    crew: Array<Crew>;
    rockets: Array<Rocket>;
    dragons: Array<Dragon>;

    constructor(private _spaceXService: SpaceXService, private router: Router) {
        this.bases = new Array<Base>();
        this.crew = new Array<Crew>();
        this.rockets = new Array<Rocket>();
        this.dragons = new Array<Dragon>();
    }

    ngOnInit() {
        // Company
        this._spaceXService.getCompanyData().subscribe((res: Company) => this.company = res)

        // Starlink
        this._spaceXService.getActiveStarlinks().subscribe((res: StarLink) => this.activeStarlink = res)
        this._spaceXService.getInactiveStarlinks().subscribe((res: StarLink) => this.inactiveStarlink = res)

        // Bases 
        this._spaceXService.getAllLandpads().subscribe((res: Array<Base>) => this.bases.push(...res));
        this._spaceXService.getAllLaunchpads().subscribe((res: Array<Base>) => this.bases.push(...res))

        // Dragons
        this._spaceXService.getAllDragons().subscribe((res: Array<Dragon>) => this.dragons.push(...res))

        // Tripulacion
        this._spaceXService.getAllCrews().subscribe((res: Array<Crew>) => this.crew.push(...res))

        // Cohetes
        this._spaceXService.getAllRockets().subscribe((res: Array<Rocket>) => this.rockets.push(...res))
    }

    getActiveP(){
        return (this.activeStarlink.totalDocs * (100 / (this.activeStarlink.totalDocs + this.inactiveStarlink.totalDocs))).toFixed(1);
    }

    getInactiveP(){
        return (this.inactiveStarlink.totalDocs * (100 / (this.activeStarlink.totalDocs + this.inactiveStarlink.totalDocs))).toFixed(1);
    }

    btnClick(url: string){
        this.router.navigateByUrl(url)
    }
}