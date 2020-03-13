import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OperatingSystemService } from '../services/operating-system.service';

@Injectable()
export class OperatingSystemEffects {

    loadOperatingSystems$ = createEffect((): any => this.actions$.pipe(
        ofType('[Shop Page] Load OperatingSystems'),
        mergeMap(() => this.operatingSystemService.getOS()
            .pipe(
                map(operatingSystems => ({type: '[OperatingSystems API] OperatingSystems Loaded Success', payload: operatingSystems}),
                    catchError(() => EMPTY)
                ))
        )
    ));

    constructor(
        private actions$: Actions,
        private operatingSystemService: OperatingSystemService
    ) {
    }
}
