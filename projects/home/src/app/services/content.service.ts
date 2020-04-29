import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Clients, Content } from './content';

export const CONTENT: Content[] = [
    {
        id: 1,
        title: 'Webshop',
        subtitle: 'Example e-commerce site (Telecom)',
        avatar: '/assets/javascript.svg',
        url: 'examples/webshop',
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
        content: 'Ik heb een ruime ervaring met Angular.'
    },
    {
        id: 2,
        title: 'CSV Upload',
        subtitle: 'Example CSV upload functionality',
        avatar: '/assets/javascript.svg',
        url: 'examples/csv-upload',
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
        content: 'Ik heb een ruime ervaring met Angular.'
    }
];

export const CLIENTS: Clients[] = [
    {
        id: 1,
        url: '/assets/clients/sanoma.png',
        name: 'Sanoma'
    },
    {
        id: 2,
        url: '/assets/clients/mn.jpg',
        name: 'MN'

    },
    {
        id: 3,
        url: '/assets/clients/vodafone.svg',
        name: 'Vodafone'
    },
    {
        id: 4,
        url: '/assets/clients/postnl.jpg',
        name: 'Postnl'
    },
    {
        id: 5,
        url: '/assets/clients/sanoma.png',
        name: 'Sanoma'
    },
    {
        id: 6,
        url: '/assets/clients/mn.jpg',
        name: 'MN'

    },
    {
        id: 7,
        url: '/assets/clients/vodafone.svg',
        name: 'Vodafone'
    },
    {
        id: 8,
        url: '/assets/clients/postnl.jpg',
        name: 'Postnl'
    },
];


@Injectable({
    providedIn: 'root'
})
export class ContentService {


    constructor(private http: HttpClient) {
    }

    getContent(): Observable<Content[]> {

        return of(CONTENT);
        // return this.http.get<Content[]>(CONTENT)
        //   .pipe(
        //     catchError(this.handleError('getHeroes', []))
        //   );
    }
}
