import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Clients, Content } from './content';

export const CONTENT: Content[] = [
    {
        id: 1,
        name: 'JavaScript',
        subtitle: 'Senior - ES5 - ES6',
        avatar: '/assets/javascript.svg',
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
        name: 'Angular',
        subtitle: 'Senior - 2/4/6/7 & JS',
        avatar: '/assets/angular.svg',
        bulletpoints: [
            {
                point: 'NgRx'
            },
            {
                point: 'RxJs'
            },
            {
                point: 'TypeScript'
            }
        ],
        content: 'Ik heb een ruime ervaring met Angular. '
    },
    {
        id: 3,
        name: 'React',
        subtitle: 'Junior',
        avatar: '/assets/react.svg',
        bulletpoints: [
            {
                point: 'Redux'
            },
        ],
        content: ''
    },
    {
        id: 4,
        name: 'AWS',
        subtitle: 'Medior',
        avatar: '/assets/aws.svg',
        bulletpoints: [
            {
                point: 'AWS Lambda'
            },
            {
                point: 'Amazon DynamoDB'
            },
            {
                point: 'Amazon S3'
            }
        ],
        content: ''

    },
    {
        id: 5,
        name: 'NodeJS',
        subtitle: 'Medior',
        avatar: '/assets/nodejs.svg',
        bulletpoints: [
            {
                point: 'Express'
            },
        ],
        content: ''

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

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
