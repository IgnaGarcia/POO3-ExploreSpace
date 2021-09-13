import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Apod } from '../models/apod.model';


@Injectable({ providedIn: 'root' })
export class ApodService {
    API_KEY = "n9uJb7isj4D4O6DhxlW0ehCQYvJuLyNS8x9GleAH"
    URL = `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`;

    constructor(private http: HttpClient) { }

    getApods(start_date: string, end_date: string): Observable<Array<Apod>> {
        return this.http.get<Array<Apod>>(`${this.URL}&start_date=${start_date}&end_date=${end_date}`)
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