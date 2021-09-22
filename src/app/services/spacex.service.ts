import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { env } from 'src/environments/environment';
import { Launch } from '../models/launch.model';
import { Rocket } from '../models/rocket.model';
import { Crew } from '../models/crew.model';
import { Dragon } from '../models/dragon.model';
import { Company } from '../models/company.model';
import { StarLink } from '../models/starlink.model';

@Injectable({ providedIn: 'root' })
export class SpaceXService {
    constructor(private http: HttpClient) { }

    /* BASE */
    private get(path: string): Observable<any> {
        return this.http.get(env.spaceX_url + path)
            .pipe(
                retry(1),
                catchError(this.processError)
            );
    }

    private post(path: string, body: any): Observable<any> {
        return this.http.post(env.spaceX_url + path, body)
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
        return this.get(env.upcomingLaunches)
    }

    getLatestLaunches(): Observable<Launch> {
        return this.get(env.latestLaunches)
    }

    getAllLaunches(): Observable<Array<Launch>> {
        return this.get(env.launches);
    }

    /* ROCKETS */
    getAllRockets(): Observable<Array<Rocket>> {
        return this.get(env.rockets);
    }

    getRocket(rocket: string): Observable<Rocket> {
        return this.get(`${env.rockets}/${rocket}`);
    }

    /* CREW */
    getAllCrews(): Observable<Array<Crew>> {
        return this.get(env.crew);
    }

    getCrew(crew: string): Observable<Crew> {
        return this.get(`${env.crew}/${crew}`);
    }

    /* DRAGONS */
    getAllDragons(): Observable<Array<Dragon>> {
        return this.get(env.dragons);
    }

    getDragon(dragon: string): Observable<Dragon> {
        return this.get(`${env.dragons}/${dragon}`);
    }

    /* LAUNCHPADS */
    getAllLaunchpads(): Observable<Array<Dragon>> {
        return this.get(env.launchpads);
    }

    getLaunchpad(launchpad: string): Observable<Dragon> {
        return this.get(`${env.launchpads}/${launchpad}`);
    }

    /* LANDPADS */
    getAllLandpads(): Observable<Array<Dragon>> {
        return this.get(env.landpads);
    }

    getLandpad(landpad: string): Observable<Dragon> {
        return this.get(`${env.landpads}/${landpad}`);
    }

    /* STARLINK */
    getActiveStarlinks(): Observable<StarLink> {
        let body = JSON.stringify({
            "query": {
                "latitude": {
                    "$ne": null
                }
            },
            "options": {
                "pagination": false,
                "select": {
                    "latitude": 1,
                    "longitude": 1,
                    "height_km": 1,
                    "velocity_kms": 1,
                    "launch": 1
                }
            }
        });
        return this.post(env.starlink, body);
    }

    getInactiveStarlinks(): Observable<StarLink> {
        let body = JSON.stringify({
            "query": {
                "latitude": null
            },
            "options": {
                "pagination": false,
                "select": {
                    "launch": 1
                }
            }
        });
        return this.post(env.starlink, body);
    }

    /* COMPANY */
    getCompanyData(): Observable<Company> {
        return this.get(env.company);
    }
}