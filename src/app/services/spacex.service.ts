import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Launch } from '../models/launch.model';
import { Rocket } from '../models/rocket.model';
import { Crew } from '../models/crew.model';
import { Dragon } from '../models/dragon.model';
import { Company } from '../models/company.model';
import { StarLink } from '../models/starlink.model';
import { Launchpad } from '../models/launchpad.model';
import { Landpad } from '../models/landpad.model';

interface Api {
    spaceX_url: string;
    launches: string;
    latestLaunches: string;
    upcomingLaunches: string;
    rockets: string;
    crew: string;
    dragons: string;
    company: string;
    launchpads: string;
    landpads: string;
    starlink: string;
}

@Injectable({ providedIn: 'root' })
export class SpaceXService {
    api: Api = {
        spaceX_url: "https://api.spacexdata.com/v4",
        launches: "/launches",
        latestLaunches: "/launches/latest",
        upcomingLaunches: "/launches/upcoming",
        rockets: "/rockets",
        crew: "/crew",
        dragons: "/dragons",
        company: "/company",
        launchpads: "/launchpads",
        landpads: "/landpads",
        starlink: "/starlink/query"
    }

    constructor(private http: HttpClient) { }

    /* BASE */
    private get(path: string): Observable<any> {
        return this.http.get(this.api.spaceX_url + path)
            .pipe(
                retry(1),
                catchError(this.processError)
            );
    }

    private post(path: string, body: any): Observable<any> {
        return this.http.post(this.api.spaceX_url + path, body)
            .pipe(
                retry(1),
                catchError(this.processError)
            );
    }

    private processError(err: any) {
        let message = err.error instanceof ErrorEvent ?
            err.error.message
            : `Error Code: ${err.status}\nMessage: ${err.message}`

        console.log(message);
        return throwError(message);
    }

    /* LAUNCHES */
    getUpcomingLaunches(): Observable<Array<Launch>> {
        return this.get(this.api.upcomingLaunches)
    }

    getLatestLaunches(): Observable<Launch> {
        return this.get(this.api.latestLaunches)
    }

    getAllLaunches(): Observable<Array<Launch>> {
        return this.get(this.api.launches);
    }

    /* ROCKETS */
    getAllRockets(): Observable<Array<Rocket>> {
        return this.get(this.api.rockets);
    }

    getRocket(rocket: string): Observable<Rocket> {
        return this.get(`${this.api.rockets}/${rocket}`);
    }

    /* CREW */
    getAllCrews(): Observable<Array<Crew>> {
        return this.get(this.api.crew);
    }

    getCrew(crew: string): Observable<Crew> {
        return this.get(`${this.api.crew}/${crew}`);
    }

    /* DRAGONS */
    getAllDragons(): Observable<Array<Dragon>> {
        return this.get(this.api.dragons);
    }

    getDragon(dragon: string): Observable<Dragon> {
        return this.get(`${this.api.dragons}/${dragon}`);
    }

    /* LAUNCHPADS */
    getAllLaunchpads(): Observable<Array<Launchpad>> {
        return this.get(this.api.launchpads);
    }

    getLaunchpad(launchpad: string): Observable<Launchpad> {
        return this.get(`${this.api.launchpads}/${launchpad}`);
    }

    /* LANDPADS */
    getAllLandpads(): Observable<Array<Landpad>> {
        return this.get(this.api.landpads);
    }

    getLandpad(landpad: string): Observable<Landpad> {
        return this.get(`${this.api.landpads}/${landpad}`);
    }

    /* STARLINK */
    getActiveStarlinks(): Observable<StarLink> {
        return this.post(this.api.starlink, {
            "query": {
                "latitude": {
                    "$ne": null
                }
            },
            "options": {
                "select": {
                    "launch": 1
                }
            }
        });
    }

    getInactiveStarlinks(): Observable<StarLink> {
        return this.post(this.api.starlink, {
            "query": {
                "latitude": null
            },
            "options": {
                "select": {
                    "launch": 1
                }
            }
        });
    }

    /* COMPANY */
    getCompanyData(): Observable<Company> {
        return this.get(this.api.company);
    }
}