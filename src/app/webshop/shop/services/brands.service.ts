import { Injectable } from '@angular/core';
import { Brand } from './brands';
import { Observable, of } from 'rxjs';

export const BRANDS: Brand[] = [
    {
        id: 1,
        name: 'Apple'
    },
    {
        id: 2,
        name: 'Samsung'
    },
];

@Injectable({
    providedIn: 'root'
})
export class BrandsService {

    constructor() {
    }


    getBrands(): Observable<Brand[]> {

        return of(BRANDS);
        // return this.http.get<Content[]>(CONTENT)
        //   .pipe(
        //     catchError(this.handleError('getHeroes', []))
        //   );
    }
}
