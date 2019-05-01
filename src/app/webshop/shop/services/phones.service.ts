import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phones } from './phones';


export const PHONES: Phones[] = [
    {
        id: 1,
        title: 'Samsung Galaxy S10',
        subtitle: '128GB',
        img: '/assets/webshop/dvi-front_Samsung_S10_Blue_305x450.png',
        colors: [
            {
                color: 'red'
            },
            {
                color: 'blue'
            }
        ],
        bulletpoints: [
            {
                point: 'Functional Programming'
            },
            {
                point: 'Prototypal Inheritance',
            },
            {
                point: 'Object composition > Classical inheritance',
            }
        ],
        content: 'Ik heb een ruime ervaring met Angular. '
    },
    {
        id: 2,
        title: 'Apple iPhone XS',
        subtitle: '64GB',
        img: '/assets/webshop/dvi-front_iPhone_Xs_Gold_305x450.png',
        colors: [
            {
                color: 'red'
            },
            {
                color: 'blue'
            }
        ],
        bulletpoints: [
            {
                point: 'Functional Programming'
            },
            {
                point: 'Prototypal Inheritance',
            },
            {
                point: 'Object composition > Classical inheritance',
            }
        ],
        content: 'Ik heb een ruime ervaring met Angular. '
    },
];

@Injectable({
    providedIn: 'root'
})
export class PhonesService {

    constructor() {

    }

    getPhones(): Observable<Phones[]> {

        return of(PHONES);
        // return this.http.get<Content[]>(CONTENT)
        //   .pipe(
        //     catchError(this.handleError('getHeroes', []))
        //   );
    }
}
