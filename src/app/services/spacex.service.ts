import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Launch } from '../models/launch.model';

@Injectable({ providedIn: 'root' })
export class SpaceXService {
    URL = "https://api.spacexdata.com/v4";

    constructor(private http: HttpClient) { }

    getUpcomingLaunches(): Observable<Array<Launch>> {
        return this.http.get<Array<Launch>>(this.URL + '/launches/upcoming')
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    getLatestLaunches(): Observable<Launch> {
        return this.http.get<Launch>(this.URL + '/launches/latest')
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    getAllLaunches(): Observable<Array<Launch>> {
        return this.http.get<Array<Launch>>(this.URL + '/launches')
            .pipe(
                retry(1),
                catchError(this.processError)
            )
    }

    processError(err: any) {
        let message = err.error instanceof ErrorEvent ?
            err.error.message
            : `Error Code: ${err.status}\nMessage: ${err.message}`

        console.log(message);
        return throwError(message);
    }
}