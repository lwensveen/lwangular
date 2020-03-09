import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BrandsService } from '../services/brands.service';

@Injectable()
export class BrandEffects {

    loadBrands$ = createEffect((): any => this.actions$.pipe(
        ofType('[Shop Page] Load Brands'),
        mergeMap(() => this.brandsService.getBrands()
            .pipe(
                map(brands => ({type: '[Brands API] Brands Loaded Success', payload: brands}),
                    catchError(() => EMPTY)
                ))
        )
    ));

    constructor(
        private actions$: Actions,
        private brandsService: BrandsService
    ) {
    }
}
