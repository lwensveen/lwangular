import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PhonesService } from '../services/phones.service';

@Injectable()
export class PhoneEffects {

    loadPhones$ = createEffect((): any => this.actions$.pipe(
        ofType('[Shop Page] Load Phones'),
        mergeMap(() => this.phonesService.getPhones()
            .pipe(
                map(phones => ({type: '[Phones API] Phones Loaded Success', payload: phones})),
                catchError(() => EMPTY)
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private phonesService: PhonesService
    ) {
    }
}
