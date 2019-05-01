import { Injectable } from '@angular/core';
import { Brands } from './brands';
import { Observable, of } from 'rxjs';

export const BRANDS: Brands[] = [
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

  constructor() { }



    getBrands(): Observable<Brands[]> {

        return of(BRANDS);
        // return this.http.get<Content[]>(CONTENT)
        //   .pipe(
        //     catchError(this.handleError('getHeroes', []))
        //   );
    }
}
