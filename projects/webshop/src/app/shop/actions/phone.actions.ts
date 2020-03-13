import { createAction, props } from '@ngrx/store';
import { Phone } from '../services/phones';
import { MatCheckboxChange } from '@angular/material/checkbox';

export const loaded = createAction(
    '[Phones API] Phones Loaded Success',
    props<{ payload: Phone[] }>()
);
export const filter = createAction(
    'FILTER',
    (evt: any) => (evt)
);
export const reset = createAction(
    'RESET',
);

