import { Injectable } from '@angular/core';
import { OperatingSystem } from './operatingSystem';
import { Observable, of } from 'rxjs';

export const OPERATINGSYSTEM: OperatingSystem[] = [
    {
        id: 1,
        name: 'iOS'
    },
    {
        id: 2,
        name: 'Android'
    },
];


@Injectable({
    providedIn: 'root'
})
export class OperatingSystemService {

    constructor() {
    }


    getOS(): Observable<OperatingSystem[]> {

        return of(OPERATINGSYSTEM);
        // return this.http.get<Content[]>(CONTENT)
        //   .pipe(
        //     catchError(this.handleError('getHeroes', []))
        //   );
    }
}
