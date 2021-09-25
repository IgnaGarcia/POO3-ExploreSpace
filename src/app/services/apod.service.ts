import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Apod } from '../models/apod.model';
import { env } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class ApodService {

    constructor(private http: HttpClient) { }

    getApods(start_date: string, end_date: string): Observable<Array<Apod>> {
        return this.http.get<Array<Apod>>(`${env.apod_url}&start_date=${start_date}&end_date=${end_date}`)
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